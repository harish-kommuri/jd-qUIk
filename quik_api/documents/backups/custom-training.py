
class SimplePhiBlock(nn.Module):
    def __init__(self, hidden_size, num_heads):
        super().__init__()
        self.attn = nn.MultiheadAttention(hidden_size, num_heads, batch_first=True)
        self.mlp = nn.Sequential(
            nn.Linear(hidden_size, 4*hidden_size),
            nn.GELU(),
            nn.Linear(4*hidden_size, hidden_size)
        )
        self.ln1 = nn.LayerNorm(hidden_size)
        self.ln2 = nn.LayerNorm(hidden_size)

    def forward(self, x):
        h, _ = self.attn(self.ln1(x), self.ln1(x), self.ln1(x))
        x = x + h
        h = self.mlp(self.ln2(x))
        return x + h

class MyPhiVisionModel(nn.Module):
    def __init__(self, vocab_size=32000, hidden_size=2048, num_layers=24, num_heads=32):
        super().__init__()
        self.emb = nn.Embedding(vocab_size, hidden_size)
        self.blocks = nn.ModuleList([SimplePhiBlock(hidden_size, num_heads) for _ in range(num_layers)])
        self.ln_f = nn.LayerNorm(hidden_size)
        self.lm_head = nn.Linear(hidden_size, vocab_size)

        # TODO: add vision encoder + projector (CLIP-like)

    def forward(self, input_ids, pixel_values=None):
        x = self.emb(input_ids)
        print("xxxxx", x)
        for blk in self.blocks:
            x = blk(x)
        x = self.ln_f(x)
        return self.lm_head(x)

# Load pretrained weights from safetensors
weights = load_file(model_path + "/model-00001-of-00002.safetensors")

model = MyPhiVisionModel()
model.load_state_dict(weights, strict=False)  # strict=False since vision encoder is missing here




class ParquetVisionDataset(ParquetDataset):
    def __init__(self, df, tokenizer, image_size=224):
        self.df = df
        self.tokenizer = tokenizer
        self.image_transform = T.Compose([
            T.Resize((image_size, image_size)),
            T.ToTensor(),
            T.Normalize(mean=[0.5,0.5,0.5], std=[0.5,0.5,0.5])
        ])

    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        row = self.df[idx]
        print(idx, row)

        # process image
        image = row["image"]
        pixel_values = self.image_transform(image)

        # process text
        encoding = self.tokenizer(
            row["llm_generated_idea"],
            return_tensors="pt",
            padding="max_length",
            truncation=True,
            max_length=128
        )

        return {
            "pixel_values": pixel_values,
            "input_ids": encoding["input_ids"].squeeze(0)
        }


from torch.nn.utils.rnn import pad_sequence

def collate_fn(batch):
    pixel_values = torch.stack([item["pixel_values"] for item in batch])
    input_ids = [torch.tensor(item["input_ids"]) for item in batch]
    input_ids = pad_sequence(input_ids, batch_first=True, padding_value=processor.tokenizer.pad_token_id)
    return {"pixel_values": pixel_values, "input_ids": input_ids}


dataset = ParquetVisionDataset(ParquetDataset.from_parquet(filepath), tokenizer=processor.tokenizer)
loader = DataLoader(dataset, batch_size=8, collate_fn=collate_fn)

model = MyPhiVisionModel()  # your raw implementation
optimizer = torch.optim.AdamW(model.parameters(), lr=5e-5)
criterion = torch.nn.CrossEntropyLoss()

for epoch in range(20):
    for batch in loader:
        print(batch)
        optimizer.zero_grad()
        outputs = model(batch["pixel_values"], batch["input_ids"])
        print(112, outputs)

        loss = criterion(outputs.logits.view(-1, outputs.logits.size(-1)), batch["input_ids"].view(-1))
        loss.backward()
        optimizer.step()
    print(f"Epoch {epoch} loss {loss.item()}")
from langchain_community.llms import Ollama

# Initialize the LLaMA model
llm = Ollama(model="exaone-deep:2.4b")

# Test with a sample prompt
response = llm.invoke("Tell me a joke")
print(response)

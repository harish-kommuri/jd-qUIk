const { useRouter } = require("next/router")

const ChatPage = () => {
    const router = useRouter();

    const chatId = crypto.randomUUID()

    router.replace("/chat/" + chatId);

    return null;
}
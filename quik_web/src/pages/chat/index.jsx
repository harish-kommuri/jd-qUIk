import { useRouter } from "next/router";
import React from "react";

const ChatPage = () => {
    const router = useRouter();
    const chatId = crypto.randomUUID()

    React.useEffect(() => {
        router.replace("/chat/" + chatId);
    }, []);

    return null;
}

export default ChatPage

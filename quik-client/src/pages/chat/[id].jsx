import React from "react";
import { useRouter } from "next/router"

import ChatView from "@qUIk-UI/components/chat"

const apiBasePath = "http://localhost:8081"


const ChatPage = () => {
    const router = useRouter();
    const chatId = router.query.id || "";
    const [chatMessages, setChatMessages] = React.useState({});

    const sendPrompt = (promptMessage = "") => {
        if (!chatId || !promptMessage) {
            return;
        }

        const { id: sentId, data: sentData } = createMessage(promptMessage, true);
        
        setChatMessages((prev) => ({ ...prev, [sentId]: sentData }));

        const sse = new EventSource(apiBasePath + "/chat/" + chatId + "/message/" + '');

        sse.onmessage = (e) => {
            console.log(e.data);
        }

        sse.onerror = (e) => {
            console.log("stream error", e);
        }
    }

    return (
        <main className="page-container">
            <ChatView />
        </main>
    )
}

export default ChatPage

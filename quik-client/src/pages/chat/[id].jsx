import React from "react";
import { useRouter } from "next/router"

import ChatView from "@qUIk-UI/components/chat"
import createMessage from "@qUIk-UI/utils/createMessage";
import useWebSockets from "../../../hooks/useWebSocket";

const apiBasePath = "http://localhost:8081"


const ChatPage = () => {
    const router = useRouter();
    const chatId = router.query.id || "";
    const [chatMessages, setChatMessages] = React.useState({});
    const [thinking, setThinking] = React.useState(false);

    const socket = useWebSockets();

    React.useEffect(() => {
        if (!chatId) { return; }

        socket.connect("http://localhost:8081/chat/" + chatId);

        return () => {
            socket.close();
        }
    }, [chatId])

    socket.onMessage((e) => {
        console.log(e);
    });

    const sendPrompt = (promptMessage = "") => {
        console.log(chatId, promptMessage);

        if (!chatId || !promptMessage) {
            return;
        }

        const { id: sentId, data: sentData } = createMessage([promptMessage], true);
        setChatMessages((prev) => ({ ...prev, [sentId]: sentData }));

        const { id: receivedId, data: receivedData } = createMessage([], false, true);
        setChatMessages((prev) => ({ ...prev, [receivedId]: receivedData }));
        setThinking(true);

        console.log("Pushing to socket ... ");

        socket.send({
            action: "prompt",
            message: promptMessage
        })
    }

    return (
        <main className="page-container">
            <ChatView sendPrompt={sendPrompt} messages={chatMessages} thinking={thinking} />
        </main>
    )
}

export default ChatPage

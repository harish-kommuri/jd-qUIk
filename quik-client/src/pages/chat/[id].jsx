import React from "react";
import { useRouter } from "next/router"

import ChatView from "@qUIk-UI/components/chat"
import createMessage from "@qUIk-UI/utils/createMessage";
import useWebSockets from "../../../hooks/useWebSocket";
// import callThrottle from "@qUIk-UI/utils/throttle";

const apiBasePath = "http://localhost:8081"

// const throttle = callThrottle(200);


const ChatPage = () => {
    const router = useRouter();
    const chatId = router.query.id || "";
    const [chatMessages, setChatMessages] = React.useState({});
    const [thinking, setThinking] = React.useState(false);

    const socket = useWebSockets();

    React.useEffect(() => {
        if (!chatId) { return; }

        socket.connect(apiBasePath + "/chat/" + chatId);

        return () => {
            socket.close();
        }
    }, [chatId]);

    socket.onMessage((data = {}) => {
        const { id, type, value } = data;
        const prevData = chatMessages[id] || {};

        if (type === "part") {
            prevData.messages.push(value || "\n");
        } else if (type === "end") {
            prevData.inProgress = false;
            prevData.completed = true;
            prevData.completedOn = new Date()
        }

        setChatMessages((prev) => ({ ...prev, [id]: prevData }));
    });

    const sendPrompt = (promptMessage = "") => {
        if (!chatId || !promptMessage) {
            return;
        }

        const { id: sentId, data: sentData } = createMessage([promptMessage], {
            sent: true,
            completed: true,
            completedOn: new Date()
        });

        setChatMessages((prev) => ({ ...prev, [sentId]: sentData }));
        
        const { id: receivedId, data: receivedData } = createMessage([], {  inProgress: true });
        setChatMessages((prev) => ({ ...prev, [receivedId]: receivedData }));

        setThinking(true);

        socket.send({
            action: "prompt",
            message: promptMessage,
            msgId: receivedId
        })
    }

    return (
        <main className="page-container">
            <ChatView sendPrompt={sendPrompt} messages={chatMessages} thinking={thinking} />
        </main>
    )
}

export default ChatPage

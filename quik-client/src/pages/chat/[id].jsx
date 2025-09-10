import React from "react";
import { useRouter } from "next/router"

import ChatView from "@qUIk-UI/components/chat"
import createMessage from "@qUIk-UI/utils/createMessage";
import { message } from "antd";
import xhr from "@qUIk-UI/utils/xhr";
// import useSSE from "../../../hooks/useSSE";
// import callThrottle from "@qUIk-UI/utils/throttle";

const apiBasePath = "http://localhost:8081/chat"

// const throttle = callThrottle(200);


const ChatPage = () => {
    const router = useRouter();
    const chatId = router.query.id || "";
    const [chatMessages, setChatMessages] = React.useState({});
    const [thinking, setThinking] = React.useState(false);
    const [msgApi, context] = message.useMessage()

    // const sse = useSSE();

    // React.useEffect(() => {
    //     if (!chatId) { return; }

    //     sse.connect(apiBasePath + "/chat/sse/" + chatId);

    //     return () => {
    //         sse.close();
    //     }
    // }, [chatId]);

    const eventSourceRef = React.useRef({})
    const [startListening, setStartListening] = React.useState(false)


    // const createStream = (chatId) => {
    //     return new Promise((resolve, reject) => {
    //         if (!chatId) {
    //             reject();
    //             return;
    //         }

    //         let evtSource = eventSourceRef.current;

    //         if (!(evtSource instanceof EventSource)) {
    //             evtSource = new EventSource(apiBasePath + "/sse/" + chatId);
    //             eventSourceRef.current = evtSource;
    //         }

    //         // console.log(evtSource.OPEN, evtSource.CLOSED)

    //         evtSource.onopen = () => {
    //             resolve(evtSource);
    //             setStartListening(true);
    //         }
    //     });
    // }

    // React.useEffect(() => {
    //     const sse = eventSourceRef.current;

    //     const onerror = () => {
    //         // msgApi.error("Connection closed", 3)
    //     }

    //     const onmessage = (e) => {
    //         try {
    //             const data = JSON.parse(e.data);
    //             const { msgid, type, value } = data;
    //             const prevData = chatMessages[msgid];

    //             if (type === "part") {
    //                 prevData.messages.push(value || "\n");
    //             } else if (type === "end") {
    //                 prevData.inProgress = false;
    //                 prevData.completed = true;
    //                 prevData.completedOn = new Date()

    //                 eventSourceRef.current = {};
    //                 sse instanceof EventSource && sse.close();
    //             }

    //             setChatMessages((prev) => ({ ...prev, [msgid]: prevData }));
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }


    //     if (startListening && sse instanceof EventSource) {
    //         sse.addEventListener("error", onerror);
    //         sse.addEventListener("message", onmessage);
    //     }

    //     return () => {
    //         if (sse instanceof EventSource) {
    //             sse.removeEventListener("error", onerror);
    //             sse.removeEventListener("message", onmessage);
    //         }
    //     }
    // }, [chatMessages, startListening]);

    const sendPrompt = async (payload = {}) => {
        const { type = "", value: promptMessage = "" } = payload;

        if (!chatId || !promptMessage) { return; }

        const { id: sentId, data: sentData } = createMessage([promptMessage], {
            sent: true,
            completed: true,
            completedOn: new Date()
        });

        setChatMessages((prev) => ({ ...prev, [sentId]: sentData }));

        const { id: receivedId, data: receivedData } = createMessage([], { inProgress: true });
        setChatMessages((prev) => ({ ...prev, [receivedId]: receivedData }));
        setThinking(true);

        // await createStream(chatId);
        // xhr.post(apiBasePath + "/sse/" + chatId + "/prompt/" + receivedId, {
        //     text: promptMessage
        // });

        const formData = new FormData();

        formData.append("type", type);
        formData.append("value", postMessage);
        const resp = await xhr.post(apiBasePath + "/synchronous/" + chatId, formData);

        if (resp.data?.error > 0) {
            msgApi.error(resp.data.message || "Something went wrong.")
        } else {
            setChatMessages((prev) => ({
                ...prev,
                [receivedId]: {
                    ...receivedData,
                    messages: resp.data.data ? [resp.data.data] : [],
                    inProgress: false,
                    completed: true,
                    completedOn: new Date()
                }
            }));
        }

        setThinking(false);

        // sse.send(chatId, {
        //     action: "prompt",
        //     message: promptMessage,
        //     msgId: receivedId
        // })
    }

    return (
        <main className="page-container">
            <ChatView sendPrompt={sendPrompt} messages={chatMessages} thinking={thinking} />
            {context}
        </main>
    )
}

export default ChatPage

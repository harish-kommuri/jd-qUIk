import isBrowser from "@qUIk-UI/utils/isBrowser";
import xhr from "@qUIk-UI/utils/xhr";
import React from "react";

const apiBasePth =  "http://localhost:8081" // process.env.REACT_APP_UPLOAD_API_BASEPATH

function useSSE() {
    const sseRef = React.useRef({});
    const callbacksRef = React.useRef({});

    const sseStateRef = React.useRef({
        opened: false,
        url: "",
        reconnecting: false,
    });

    const sse = sseRef.current;
    const [_, reconnectHit] = React.useState(null);

    const connectSSE = (url) => {
        console.log({ url });
        try {
            sseStateRef.current.url = url;
            const es = new EventSource(url);

            // es.onerror = (e) => { console.log(e); }
            // es.onclose = () => {
            //     setTimeout(() => {
            //         connectSSE(url);
            //         reconnectHit();
            //     }, 5000);
            // }

            Object.entries(callbacksRef.current).forEach(([eventName, callback]) => {
                addListener(eventName, callback);
            });

            sseRef.current = es;
        } catch (e) {
            console.log(e);
        }
    }

    const closeSSE = () => {
        if (sse instanceof EventSource) {
            sse.close();
        }

        sseRef.current = null;
        sseStateRef.current = { opened: false };
    }

    const addListener = (event, callback) => {
        const prevCallback = callbacksRef.current[event];
        callbacksRef.current[event] = callback;

        if (isBrowser() && sse instanceof EventSource) {
            (typeof prevCallback === "function") && sse.removeEventListener(event, prevCallback);
            sse.addEventListener(event, callback, false);
        }
    }

    return {
        connect: connectSSE,
        close: closeSSE,
        onError: (callback) => {
            addListener("error", callback)
        },
        send: (id, data) => {
            if (sse instanceof EventSource && !sse.CLOSED) {
                xhr.post(`${apiBasePth}/chat/sse/${id}/prompt`, JSON.stringify(data))
            }
        },
        onMessage: (callback) => {
            const onMessageReceived = (event) => {
                console.log(event);
                try {
                    if (event.data?.length > 0) {
                        const data = JSON.parse(event.data);
                        callback(data, event);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            addListener("message", onMessageReceived);
        },
        onClose: (callback) => {
            addListener("close", callback);
        }
    }
}

export default useSSE;



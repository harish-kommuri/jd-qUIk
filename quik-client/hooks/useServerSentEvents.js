import React from "react";

const apiBasePth =  "http://localhost:8081" // process.env.REACT_APP_UPLOAD_API_BASEPATH

function useSSE({ actions = [] } = {}) {
    const sseRef = React.useRef({});
    const callbacksRef = React.useRef({});

    const sseStateRef = React.useRef({
        opened: false,
        url: "",
        reconnecting: false,
    });

    const [_, reconnectHit] = React.useState(null)

    const sse = sseRef.current;

    React.useEffect(() => {
        return () => {
            sseStateRef.current = { opened: false };

            if (sse instanceof EventSource) {
                Object.entries(callbacksRef.current).forEach(([event, listener]) => {
                    typeof listener === "function" && sse.removeEventListener(event, listener)
                });

                sse.close();
            }
        }
    }, []);

    const createServerSentEvents = (url) => {
        try {
            sseStateRef.current.url = url;
            const evtSource = new EventSource(`${apiBasePth}/sse${url}?access_token=abcd`, {
                // withCredentials: true,
                rejectUnauthorized: false                
            });

            evtSource.onerror = (e) => {
                console.log(e);
            }
            sseRef.current = evtSource;
        } catch (e) {
            console.log(e);
        }
    }

    const addListener = (event, callback) => {
        if (sse instanceof EventSource) {
            const prevCallback = callbacksRef.current[event];
            (typeof prevCallback === "function") && sse.removeEventListener(event, prevCallback);

            callbacksRef.current[event] = callback;
            sse.addEventListener(event, callback, false);
        }
    }

    return {
        connect: createServerSentEvents,
        close: () => {
            sse.close?.();
            sseRef.current = null;
            sseStateRef.current = { opened: false };
        },
        sendMessage: (data) => {
            try {
                console.log(data, sseRef.current);
                if (sseRef.current?.CLOSED) {

                }
            } catch (e) {
                console.log("Error while sending data through socket", e);
            }
        },
        onError: (callback) => {
            addListener("error", callback)
        },
        onMessage: (callback) => {
            const onMessageReceived = (event) => {
                try {
                    if (event.data?.length > 0) {
                        const data = JSON.parse(event.data);
                        if (!actions.length || actions.includes(data.type)) {
                            callback(data, event);
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            addListener("message", onMessageReceived);
        },
        onClose: (callback) => {
            addListener("close", callback);
        },
        reconnect: (duration = 3000) => {
            if (sseStateRef.current.reconnecting) {
                return;
            }

            sseStateRef.current.reconnecting = true;
        
            setTimeout(() => {
                createServerSentEvents(sseStateRef.current.url);
                Object.entries(callbacksRef.current).forEach(([event, callback]) => {
                    addListener(event, callback);
                });

                sseStateRef.current.reconnecting = false;
                reconnectHit(Math.random());
            }, duration);
        }
    }
}

export default useSSE;



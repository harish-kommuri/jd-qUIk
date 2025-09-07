import React from "react";

// const apiBasePth =  "http://localhost:8081" // process.env.REACT_APP_UPLOAD_API_BASEPATH

function useWebSockets({ url } = {}) {
    const socketRef = React.useRef({});
    const callbacksRef = React.useRef({});

    const socketStateRef = React.useRef({
        opened: false,
        url: "",
        reconnecting: false,
    });

    const socket = socketRef.current;
    const [_, reconnectHit] = React.useState(null);

    const createWebSocket = (url) => {
        try {
            socketStateRef.current.url = url;
            const ws = new WebSocket(url);

            ws.onerror = (e) => {
                console.log(e);
            }

            ws.onclose = () => {
                setTimeout(() => {
                    createWebSocket(url);
                    reconnectHit();
                }, 5000);
            }

            socketRef.current = ws;
        } catch (e) {
            console.log(e);
        }
    }

    const closeWebSocket = () => {
        if (socket instanceof WebSocket) {
            socket.close();
        }

        socketRef.current = null;
        socketStateRef.current = { opened: false };
    }

    const addListener = (event, callback) => {
        if (socket instanceof WebSocket) {
            const prevCallback = callbacksRef.current[event];
            (typeof prevCallback === "function") && socket.removeEventListener(event, prevCallback);

            callbacksRef.current[event] = callback;
            socket.addEventListener(event, callback, false);
        }
    }

    return {
        connect: createWebSocket,
        close: closeWebSocket,
        onError: (callback) => {
            addListener("error", callback)
        },
        send: (data) => {
            console.log(data, socket);
            if (socket instanceof WebSocket) {
                socket.send(JSON.stringify(data))
            }
        },

        onMessage: (callback) => {
            const onMessageReceived = (event) => {
                try {
                    if (event.data?.length > 0) {
                        const data = JSON.parse(event.data);
                        // if (!actions.length || actions.includes(data.type)) {
                            callback(data, event);
                        // }
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

export default useWebSockets;



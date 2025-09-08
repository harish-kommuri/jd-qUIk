import React from "react";
import ChatFooter from "./ChatFooter";
import ChatMessages from "./ChatMessages";

const ChatView = ({
    sendPrompt = () => { },
    messages = {},
    thinking = false
}) => {
    return (
        <>
            <section className="chat-container p-20 ">
                <ChatMessages messages={messages} />
                <ChatFooter sendPrompt={sendPrompt} thinking={thinking} />
            </section>
            <style jsx global>{`
.chat-container {
    position: relative;
    border: 1px solid #454545;
    border-radius: 16px;
    width: 560px;
    max-width: 100%;
    margin: 30px auto;
    padding: 20px;
    height: calc(100% - 60px);
}

.chat-container .chat-footer {
    position: absolute;
    bottom: 0;
    left: 20px;
    padding: 20px;
    border-top: 2px solid gray;
    right: 20px;
    display: flex;
}

.chat-container .chat-footer .chat-input {
    width: -webkit-fill-available;
}

.chat-container .chat-msg {
    padding: 10px 20px;
    max-width: 90%;
    border-radius: 12px;
    border: 1px solid gray;
    margin: 10px 0;
}

.chat-container .chat-msg-list {
    display: flex;
    flex-flow: column;
    overflow: auto;
    height: calc(100% - 60px);
}

.chat-container .chat-msg-sent {
    align-self: flex-end;
    background-color: gray;
}
            `}</style>
        </>
    );
}

export default ChatView

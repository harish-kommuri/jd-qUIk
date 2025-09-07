import React from "react";

const { default: ChatFooter } = require("./ChatFooter");
const { default: ChatMessages } = require("./ChatMessages");

const ChatView = ({
    sendPrompt = () => { },
    messages = [],
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
            `}</style>
        </>
    );
}

export default ChatView

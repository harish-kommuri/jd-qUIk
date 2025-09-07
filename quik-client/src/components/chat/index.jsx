import React from "react";

const { default: ChatFooter } = require("./ChatFooter");
const { default: ChatMessages } = require("./ChatMessages");

const ChatView = ({
    sendPrompt = () => { }
}) => {
    return (
        <>
            <ChatMessages />
            <ChatFooter />
        </>
    );
}

export default ChatView

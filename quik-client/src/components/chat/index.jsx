const { default: ChatFooter } = require("./ChatFooter");
const { default: ChatMessages } = require("./ChatMessages");

const ChatView = () => {
    return (
        <>
            <ChatMessages />
            <ChatFooter />
        </>
    );
}

export default ChatView

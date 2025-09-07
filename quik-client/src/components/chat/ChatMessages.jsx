import ReceivedMessage from "./ChatMessageReceived"
import SentMessage from "./ChatMessageSent"

const ChatMessages = ({
    messages = []
}) => {
    return (
        <section>
            <SentMessage />
            <ReceivedMessage />
        </section>
    )
}

export default ChatMessages

import ReceivedMessage from "./ChatMessageReceived"
import SentMessage from "./ChatMessageSent"

const ChatMessages = ({
    messages = []
}) => {
    const list = Object.entries(messages)

    return (
        <section className="chat-msg-list">
            {list.map(([id, data]) => {
                if (data.sent === true) {
                    return <SentMessage key={id} data={data} />
                } else {
                    return <ReceivedMessage key={id} data={data} />
                }
            })}
        </section>
    )
}

export default ChatMessages

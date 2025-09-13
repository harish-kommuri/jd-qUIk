const SentMessage = ({
    data = {}
}) => {
    return (
        <div className="chat-msg chat-msg-sent">
            {data.messages}
        </div>
    )
}

export default SentMessage

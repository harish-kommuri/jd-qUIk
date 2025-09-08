const SentMessage = ({
    data = {}
}) => {
    console.log(data);

    return (
        <div className="chat-msg chat-msg-sent">
            {data.messages}
        </div>
    )
}

export default SentMessage

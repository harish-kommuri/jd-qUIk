import React from "react";
// import Markdown from "react-markdown";

const ReceivedMessage = ({ data = {} }) => {
    const elRef = React.useRef(null);

    React.useEffect(() => {
        if (elRef.current instanceof HTMLElement) {
            elRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }
    }, [data.messages?.length]);

    return (
        <div className="chat-msg chat-msg-recieved" ref={elRef.current}>
            {data.messages}
            {/* <Markdown>{data.messages}</Markdown> */}
        </div>
    );
}

export default ReceivedMessage

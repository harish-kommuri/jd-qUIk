import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const ChatFooter = ({
    sendPrompt = () => {},
    thinking = false
}) => {
    const [inputValue, setInputValue] = React.useState("")

    return (
        <div className="chat-footer">
            <input className="chat-input" name="prompt" value={inputValue} placeholder="What's in your mind!" onChange={(e) => {
                setInputValue(e.target.value);
            }} />
            <Button>
            <SendOutlined className="chat-send-button" onClick={() => {
                sendPrompt(inputValue);
            }} />
            </Button>
        </div>
    );
}

export default ChatFooter

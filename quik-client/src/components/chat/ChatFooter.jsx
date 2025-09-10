import { SendOutlined, PictureFilled } from "@ant-design/icons";

import { Button, Upload } from "antd";
import React from "react";

const ChatFooter = ({
    sendPrompt = () => { },
    thinking = false
}) => {
    const [inputValue, setInputValue] = React.useState("")

    return (
        <div className="chat-footer">
            <input className="chat-input" name="prompt" value={inputValue} placeholder="What's in your mind!" onChange={(e) => {
                setInputValue(e.target.value);
            }} />
            <Upload
            onChange={(e) => {
                sendPrompt({ "type": "image", value: e.file });
            }}
            showUploadList={false}
            beforeUpload={() => false}
            accept="image/jpg,image/jpeg,image/png">
                <Button className="chat-send-button">
                    <PictureFilled />
                </Button>
            </Upload>
            <Button>
                <SendOutlined className="chat-send-button" onClick={() => {
                    sendPrompt({ type: "text", value: inputValue });
                }} />
            </Button>
        </div>
    );
}

export default ChatFooter

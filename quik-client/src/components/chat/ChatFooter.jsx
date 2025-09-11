import { SendOutlined, PictureFilled, CloseCircleOutlined } from "@ant-design/icons";

import { Button, Upload } from "antd";
import React from "react";

const ChatFooter = ({
    sendPrompt = () => { },
    thinking = false
}) => {
    const [inputValue, setInputValue] = React.useState("")
    const [imgSelected, setImgSelected] = React.useState({ path: null, file: null })

    return (
        <div className="chat-footer">
            {imgSelected.path ? (
                <div className="image_container">
                    <img alt="" src={imgSelected.path} title="" />
                    <CloseCircleOutlined className="img_close_icon" onClick={() => {
                        setImgSelected({ path: null, file: null });
                    }} />
                </div>
            ) : null}
            <input className="chat-input" name="prompt" value={inputValue} placeholder={imgSelected.path ? "Describe about image (Optional)" : "What's in your mind!"} onChange={(e) => {
                setInputValue(e.target.value);
            }} />
            <Upload
            onChange={(e) => {
                const path = URL.createObjectURL(e.file);
                setImgSelected({ path, file: e.file })
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
                    sendPrompt({ type: imgSelected.path ? "image" : "text", value: inputValue, img: imgSelected.file });
                }} />
            </Button>
        </div>
    );
}

export default ChatFooter

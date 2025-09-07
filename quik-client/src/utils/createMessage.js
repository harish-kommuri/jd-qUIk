import createHexString from "./createHexString";

const createMessage = (messages = [], sent = false, inProgress = false) => ({
    id: createHexString(),
    data: {
        inProgress,
        messages,
        sent,
        time: new Date().toJSON()
    }
});

export default createMessage;
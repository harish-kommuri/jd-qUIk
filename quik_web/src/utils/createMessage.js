import createHexString from "./createHexString";

const createMessage = (messages = [], { sent = false, inProgress = false, completed = false, completedOn = null } = {}) => ({
    id: createHexString(),
    data: {
        inProgress,
        messages,
        sent,
        completed,
        completedOn,
        time: new Date().toJSON()
    }
});

export default createMessage;
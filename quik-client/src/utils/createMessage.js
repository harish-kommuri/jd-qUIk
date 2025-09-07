const createMessage = (messages = [], sent = false) => ({
    id: createHexString(),
    data: {
        messages,
        sent,
        time: new Date().toJSON()
    }
});
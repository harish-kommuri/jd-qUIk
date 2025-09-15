import React from "react";

import { apiBasePath } from "@qUIk-UI/constants";
import { parseQueryParams } from "@qUIk-UI/utils/qs/parse";
import xhr from "@qUIk-UI/utils/xhr";


const ZeplinLoginRedirect = () => {
    const [message, setMessage] = React.useState("Login in progress... Please wait...")

    React.useEffect(() => {
        const qs = window.location.search || "";
        const qsObj = parseQueryParams(qs)

        if (qsObj.code) {
            getTokenData(qsObj.code);
        }
    }, []);

    const getTokenData = async (code) => {
        try {
            const { data } = await xhr.get(apiBasePath + "/auth/zeplin?code=" + code);
            setMessage(data.msg);
        } catch (e) {
            console.log(e);
            setMessage("Something went wrong. Please try again.");
        }
    }

    return (
        <div>{message}</div>
    );
}

export default ZeplinLoginRedirect

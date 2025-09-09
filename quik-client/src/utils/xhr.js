import axios from "axios";

class Xhr {
    get(...params) {
        return axios.get(...params);
    }
    post(...params) {
        return axios.post(...params);
    }
}

const xhr = new Xhr()

export default xhr;

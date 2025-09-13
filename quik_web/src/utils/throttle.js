class Throttle {
    duration;
    fireCallback = true;
    timeout = null;


    constructor(duration = 100) {
        this.duration = duration;
    }

    revoke() {
        clearTimeout(this.timeout);
    }

    call(callback = () => { }) {
        if (this.fireCallback) {
            callback();
            this.fireCallback = false;

            this.timeout = setTimeout(() => {
                this.fireCallback = true;
            }, this.duration);
        }
    };
}

function callThrottle(duration) {
    return new Throttle(duration);
}

export default callThrottle;

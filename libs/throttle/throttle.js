function throttle(func, delay) {
    let lastExecutedTime = 0;

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecutedTime > delay) {
            func.apply(this, args);
            lastExecutedTime = currentTime;
        }
    };
}

module.exports = throttle;

  
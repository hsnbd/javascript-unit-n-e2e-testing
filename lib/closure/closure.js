function makeCounter() {
    let count = 0;

    function counter() {
        return ++count;
    }
    return counter;
}

module.exports = makeCounter

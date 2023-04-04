const makeCounter = require('./closure');

describe('makeCounter', () => {
    test('counter should increment count', () => {
        const counter = makeCounter();

        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
        expect(counter()).toBe(3);
    });

    test('multiple counters should have separate counts', () => {
        const counter1 = makeCounter();
        const counter2 = makeCounter();

        expect(counter1()).toBe(1);
        expect(counter1()).toBe(2);

        expect(counter2()).toBe(1);
        expect(counter2()).toBe(2);
    });
});

const throttle = require('./throttle');

jest.useFakeTimers();

describe('throttle', () => {
    let mockFunction;
    let throttledFunction;

    beforeEach(() => {
        mockFunction = jest.fn();
        throttledFunction = throttle(mockFunction, 1000);
    });

    test('throttled function should be called once with immediate invocation', () => {
        throttledFunction('test');
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('test');
    });

    test('throttled function should be called only once within delay period', () => {
        throttledFunction('test');
        throttledFunction('test');
        throttledFunction('test');

        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('test');

        jest.advanceTimersByTime(500);

        throttledFunction('test');
        throttledFunction('test');
        throttledFunction('test');

        expect(mockFunction).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(500);

        throttledFunction('test');
        throttledFunction('test');
        throttledFunction('test');
        throttledFunction('test');
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('test');
    });
});

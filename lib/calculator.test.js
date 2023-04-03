const Calculator = require('./Calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should add two positive numbers correctly', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it('should add a positive and a negative number correctly', () => {
            expect(calculator.add(2, -3)).toBe(-1);
        });

        it('should add two negative numbers correctly', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });
    });

    describe('subtract', () => {
        it('should subtract two positive numbers correctly', () => {
            expect(calculator.subtract(3, 2)).toBe(1);
        });

        it('should subtract a positive and a negative number correctly', () => {
            expect(calculator.subtract(3, -2)).toBe(5);
        });

        it('should subtract two negative numbers correctly', () => {
            expect(calculator.subtract(-3, -2)).toBe(-1);
        });
    });

    describe('multiply', () => {
        it('should multiply two positive numbers correctly', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        it('should multiply a positive and a negative number correctly', () => {
            expect(calculator.multiply(2, -3)).toBe(-6);
        });

        it('should multiply two negative numbers correctly', () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
        });
    });

    describe('divide', () => {
        it('should divide two positive numbers correctly', () => {
            expect(calculator.divide(6, 3)).toBe(2);
        });

        it('should divide a positive and a negative number correctly', () => {
            expect(calculator.divide(6, -3)).toBe(-2);
        });

        it('should divide two negative numbers correctly', () => {
            expect(calculator.divide(-6, -3)).toBe(2);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => calculator.divide(6, 0)).toThrow();
        });
    });
});

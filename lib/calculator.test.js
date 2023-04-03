const Calculator = require('./calculator');
describe('Test Calculator', () => {
    it("add", () => {
        expect((new Calculator()).add(1,1)).toBe(2);
    });
    it("subtract", () => {
        expect((new Calculator()).subtract(4,1)).toBe(3);
    });
    it("multiply", () => {
        expect((new Calculator()).multiply(2,2)).toBe(4);
    });
    it("divide", () => {
        expect((new Calculator()).divide(10,2)).toBe(5);
    });
})
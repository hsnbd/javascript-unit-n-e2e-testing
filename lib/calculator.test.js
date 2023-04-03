const Calculator = require('./calculator');

test("add", () => {
    expect((new Calculator()).add(1,1)).toBe(2);
});
test("subtract", () => {
    expect((new Calculator()).subtract(4,1)).toBe(3);
});
test("multiply", () => {
    expect((new Calculator()).multiply(2,2)).toBe(4);
});
test("divide", () => {
    expect((new Calculator()).divide(10,2)).toBe(5);
});
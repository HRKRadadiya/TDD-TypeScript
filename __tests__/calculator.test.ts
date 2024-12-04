import Calculator from "../src/calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  it("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  it("should handle custom delimiters", () => {
    expect(calculator.add("//#\n1#2")).toBe(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow(
      "negative numbers not allowed: -2"
    );
  });

  it("should throw an exception for multiple negative numbers", () => {
    expect(() => calculator.add("-1,-2,3")).toThrow(
      "negative numbers not allowed: -1,-2"
    );
  });
});

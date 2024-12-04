export default class Calculator {
  add(input: string): number {
    if (input === "") return 0;

    let delimiter = /[\n,]/;
    if (input.startsWith("//")) {
      const parts = input.split("\n");
      delimiter = new RegExp(parts[0][2]);
      input = parts[1];
    }
    const numbers = input.split(delimiter).map(Number);
    const negatives = numbers.filter((num) => num < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

const calculator = new Calculator();
console.log(calculator.add("1,2"));
console.log(calculator.add("//:\n1:2:3"));
console.log(calculator.add("4,-2,-8"));

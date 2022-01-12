const [, , num1, num2] = process.argv
const addition = (a, b) => a + b;

console.log(addition(+(num1), +(num2)));
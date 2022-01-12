// console.log(process.argv)
const [, , num] = process.argv
const double = (n) => n * 2;

console.log(double(num));
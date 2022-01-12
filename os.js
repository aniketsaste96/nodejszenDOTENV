const os = require('os'); //inbild package

console.log("os version", os.version())
console.log("os free mem", os.freemem())
console.log("total mem", os.totalmem())
console.log("free mem in %", (os.freemem() / os.totalmem() * 100).toFixed(2))
console.log("os free mem", os.cpus())
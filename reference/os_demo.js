const os = require('os')

// Platform
console.log(os.platform())

// CPU Arch
console.log(os.arch())

// CPU Core Info
//console.log(os.cpus());

// Free memory in bytes converted to GB
console.log(os.freemem() / (8589934592 / 8) + " GBs")

// Total memory in bytes converted to GB
console.log(os.totalmem() / (8589934592 / 8) + " GBs")

// Home dir
console.log(os.homedir())

// Uptime in seconds
console.log(os.uptime() / 60 / 60 + " Hours")
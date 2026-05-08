
// index.js

const os = require("os");

function systemInfo() {
    console.log("=== System Information ===");
    console.log("User:", os.userInfo().username);
    console.log("Platform:", os.platform());
    console.log("CPU Cores:", os.cpus().length);
    console.log("RAM:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
    console.log("Uptime:", (os.uptime() / 60).toFixed(2), "minutes");
}

function randomNumber() {
    return Math.floor(Math.random() * 1000);
}

console.log("Welcome to Random Node.js Script 🚀");

systemInfo();

console.log("Random Number:", randomNumber());

setInterval(() => {
    console.log("Current Time:", new Date().toLocaleTimeString());
}, 5000);

// let fs = require('fs');
// fs.writeFileSync('1.txt', '1', 'utf8');
// const content = fs.readFileSync('1.txt', 'utf8');
// console.log('content: ', content);
const path  = require('path');
var MemoryFileSystem = require("memory-fs");
var fs = new MemoryFileSystem(); // Optionally pass a javascript object

fs.mkdirpSync(path.resolve(__dirname, "dir"));
fs.writeFileSync(path.resolve(__dirname, "dir/file.txt"), "Hello World");
const content = fs.readFileSync(path.resolve(__dirname, "dir/file.txt")); // returns Buffer("Hello World")
console.log('content: ', content.toString());
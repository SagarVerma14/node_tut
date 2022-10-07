// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     // res.write("<h1>Hello This is Sagar Verma</h1>");
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(4500);
// const fs = require("fs");
// const input = process.argv;
// if (input[2] === "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] === "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid output");
// }
// console.log(process.argv[3]);
// console.log(__filename);
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// for (let i = 0; i < 2; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, `This is my ${i} file`);
// }
// console.log(dirPath);
// fs.readdir(dirPath,(err,files)=>{
//   console.warn(files);
// });

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const fileName = `${dirPath}/apple.txt`;
console.log(fileName);
// fs.writeFileSync(fileName,'This is my new file for node js');
// fs.readFile(fileName,'utf8',(err,item) => {
//   console.log(item);
// });
// fs.appendFile(fileName,' and new phone released is iphone',(err) => {
//   if(!err){
//     console.log('File is updated');
//   }
// });
// fs.rename(fileName, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("File Name is updated");
//   }
// });
fs.unlinkSync(`${dirPath}/fruit.txt`);

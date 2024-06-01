// nodejs is nothing but js running on server
// to run the server we type    ---    node filename


// REPL - its like command prompt of nodejs, it is used to experiment and debug js
// to create repl  --- node
// R - read
// E - eval  (evaluate)
// P - print
// L - loop



// last result --- _
// > 6+3
// 9
// > 9+5
// 14
// > _+7
// 21


// .editor  --- goes into editor mode
// tab 2times - all types


// core modules are just as javascript libraries
const fs = require("fs")
// fs.writeFileSync('read.txt', "HElooooo") //if this file exists then add this data orelse vreate this file and add this data. the previous data will be gone and this new data will be written


// to appned data
// fs.appendFileSync('read.txt', " Wooorld");

// In nodejs we have additional data type "Buffer" that is not present in js
// const buf_data=  fs.readFileSync('read.txt')        //we get buffer data i.e. in binary format
// console.log(buf_data);

//to tackle we use .string
// const org_data = buf_data.toString();
// console.log(org_data)\

// another way to tackle this is
// const data =  fs.readFileSync('read.txt', "utf8")
// console.log(data)

// to delete
// fs.unlinkSync('read.txt')


//in async with all the data of sync function we also need to add a callback function
// fs.writeFile("read.txt", "Today is awesome", (err) =>{console.log("File created")})
//callback function tells what to do when task is over bcoz here it will try to take multiple tasks as its async 


// fs.readFile("read.txt", (err, data)=>{console.log(data)})  //gives buffer data
// fs.readFile("read.txt","utf8" , (err, data)=>{console.log(data)}) 



// To get os info
// const os = require("os");
// console.log(os.arch());
// console.log(os.hostname())
// console.log(os.platform())


// to get file detaills using path
// const path = require("path")
// console.log(path.extname("C:\Users\Parth Shethji\Desktop\Coding\NodeJS\index.js"))
// console.log(path.basename("C:\Users\Parth Shethji\Desktop\Coding\NodeJS\index.js"))
// const mypath = path.parse("C:\Users\Parth Shethji\Desktop\Coding\NodeJS\index.js")    //we get significant elements of path i.e. dir, root, base, name, ext
// console.log(mypath.name)



// create and export module
// each file is also called as module

// const operator = require("./mod")
// console.log(operator.addition(5, 5))
// console.log(operator.subtraction(15, 5))
// or
// const {addition, subtraction, name} = require("./mod")
// console.log(addition(5, 5))
// console.log(subtraction(15, 5))
// console.log(name)



// npm
// to initialize npm  --- npm init
// what is this package.json this is where all your npm downloaded dependencies will be stored
// package-lock.json contains more info about our module (here chalk)
const chalk = require('chalk');
// console.log(chalk.bgGreen.greenBright.underline("success"))
// console.log(chalk.red.redBright.underline.inverse("Fail"))



// validator
// const validator = require("validator")
// const res = validator.isEmail('parth@shethji.com');
// console.log(res ? chalk.green.inverse("True") : chalk.red.inverse("False"))


// once these packages are installed now if we can use them in any folder then they are called global modules
//nodemon - automatically restarting the node application when file changes in the directory are detected.
// now for only one time isntead of node we need to write nodemon
// to terminate press ctrl+c



// wrapper function  - its a anonymous fuction that comp puts everytime when excuting the code this function contains all the parameters like require, export, filename, dirname, module

// we need server to acess web pages and also to handle http requests. in nodeja we dont need third party apps like xampp we can create our own web server
// so for this we need http module
// const http = require("http")
// const server = http.createServer((req, res) =>{
//     if(req.url == "/"){
//         res.end("hello from home")
//     }else if(req.url == "/about"){
//         res.end("hello from aboutus");
//     }
//     else{
//instead of bout or home if somone types sokmething else it woll show this
// but what is happening here is we created a page to tell client thart page does not exist 
// so lets write error code
// res.writeHead(404, {"Content-type": "text/html"})
// res.end("404 error")
// now status is 404 that means client error
//     }
// });   //callback funcction by default has req and res as parameters

// // to create local host 
// // server.listen(8000, "127.0.0.1", ()=> {
// //     console.log("listening to port no. 8000")
// })   //ip adress of local host is 127.0.0.1\


// JSON - javascropt object notation
// to convert object to JSON we use stringify method

// const bio ={
//     name : "parth",
//     age :  20,
// }

// const JSONdata = JSON.stringify(bio)
// console.log(JSONdata)

// to convert JSON TO object we use Parse method
// const objdata = JSON.parse(JSONdata)
// console.log(objdata)


// all api are in json format
// whenever we work with json its a rule to write  --- res.writeHead(200, {"Content-type": "application/json"})
// 200 means success, 404 means fail


// Events module - here we create a class 
// const EventEmitter = require("events")
// const event = new EventEmitter();

// event.on("saymyname", ()=>{
//     console.log("My name is parth")
// })            //first we define then we emit

// we can also call multiple events

// event.on("saymyname", ()=>{
//     console.log("My name is nitesh")
// })

// event.on("saymyname", ()=>{
//     console.log("My name is shethji")
// })
// event.emit("saymyname")

// Streams  - objects that lets you read and write data in continuous fashion. its an instance of eventemitter object. there are 4 events here - data, end, finish(end + data is also flushed), error

// previously we used to download entire file while we used to read, here we will read chunk by chunk

// const fs = require("fs")
const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
//     const rstream = fs.createReadStream("read.txt")
//     rstream.on("data", (chunkdata) => {
//         res.write(chunkdata)
//     })

//     rstream.on("end", () => {
//         res.end();
//     })



// this can also be done using stream pipes
const rstream = fs.createReadStream("read.txt")
rstream.pipe(res)

})




server.listen(8000, "127.0.0.1")


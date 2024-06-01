// Writing into an HTML element, using innerHTML.

// Writing into the HTML output using document.write(). - // Never call document.write after the document has finished loading. It will overwrite the whole document. The document.write() method should only be used for testing.

// Writing into an alert box, using window.alert(). - In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object.

// Writing into the browser console, using console.log() - used for debugging
// window.print() method in the browser to print the content of the current window.

// On the web, you might see examples without semicolons. Ending statements with semicolon is not required, but highly recommended.


// var	Declares a variable
// let	Declares a block variable // The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015. If you want your code to run in older browsers, you must use var

// const	Declares a block constant


// var x = 10;
// // Here x is 10

// {
// var x = 2;
// // Here x is 2
// }

// // Here x is 2






// let x = 10;
// // Here x is 10

// {
// let x = 2;
// // Here x is 2
// }

// Here x is 10


// The JavaScript syntax defines two types of values:
// Fixed values also called Literals
// Variable values also called Variables
// Always declare JavaScript variables with var,let, orconst.


// Identifiers are JavaScript names.Identifiers are used to name variables and keywords, and functions. 



// whenever we take input from prompt it will come in as string


// just dont use var

// food = Number (prompt( 'how much was the food?'))
// tipPercentage = Number (prompt('tip %?'))/ 100
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log('total amount', total)


// greet = 'hi ' + name + 'Nice to meet you!'
// greet1 = `hi ${name} nice to meet you`


// //es6 style to write function
// function sum(a, b) {
//     return a + b
// }


// // arrow function with explicit return
// const sumArrow = (a, b) => {
//     return a + b
//     }


// // IMPORTANT: For implicit return, remove curly braces
// //arrow style
// const sumArrow2 = (a, b) => a + b



// // Arrays
// letters = ['a', 'b', 'c', 'd']
// letters.push('d')
// console.log(letters.slice(0,2))


// // OBJECTS {}
// const person = {
//     name: 'Leonardo',
//     shirt: 'white'
// }

// // dot notation
// console.log(person.name)

// // bracket notation
// console.log(person['shirt'])



// // methods Math.floor()
// const introducer= (name, shirt) => {
//     const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities: 50000,
//     networth: function () {
//     return this.assets - this. liabilities      
//     }
//     }
// }
//     const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my networth is $${person.netWorth()} USD `


//     num = ['1', '2', '3']
//     // for (let i=0; i < num.length; i++) {
//     //     console.log(num[i])
//     //     }

//     for (const Number of num) {   // of gives the actual element
//         console.log(Number)
//     }

//     for (const Number in num) {   // in gives the index of element
//         console.log(Number)
//     }




//     const wordFrequency = (phrase) => {
//         let frequency = {}
//         words = phrase.split(' ')
//         for (const word of words) {
//             if(word in frequency){
//                 frequency[word] +=1
//             }
//             else{
//                 frequency[word] = 1
//             }
//         }
//         return frequency
//     }

//     console.log(wordFrequency('lol what lol'))

//map function
let ans = [1,2,3,4].map(number => number*2)
console.log(ans)

// filter function
// let num = [1,2,3,4,5,6]
// console.log(num.filter(num=>num>3))

//reduce function     whenever sum comes think about reduce
// reduce function takes in function as argument
// let intarr = [1,2,3,4,5,6,7]
// console.log(intarr.reduce((prev, curr) => prev + curr))
// const result = intarr.reduce(sum)
// console.log(result)

//     let red = document.getElementById('red')
// let blue = document.getElementById("blue")
// let green = document.getElementById("green")
// red.onclick = () => console.log('you clicked red')
// blue.onclick = () => console.log("you clicked blue")
// green.onclick = () => console.log("you clicked green")

// these 2 block of codes are same up and below


// const timesclicked = { 'red':0, 'blue': 0, 'green': 0}
// let sq = document.querySelectorAll('.colorsquare')
// sq.forEach(s => {
//     s.onclick = () => {
//         console.log(s.value)
//         timesclicked[s.value] +=1
//         s.innerHTML = timesclicked[s.value]
//     }
// })

// let clrbtn = document.getElementById("clrbtn")
// clrbtn.onclick = () => clearscorebtn()

// function clearscorebtn() {
//     timesclicked.blue = 0
//     timesclicked.red = 0
//     timesclicked.green = 0
//     sq.forEach(s => {
//         s.innerHTML= s.value
//     });
// }


// APIs
//json turns this into object kind of format
// const imgdiv = document.getElementById('house')
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json.message)
//         imgdiv.innerHTML = `<img src='${json.message}'/>`
//     })

// Asynchronous programming
// You ask for something and you continue doing your othet stuff and by the time that happens you do something else

// const orderSoup = () => console.log('soup')

// console.log('you order and then start doing something else')
// setTimeout(orderSoup, 2000)
// console.log('by the time you talk soup arrives')

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         isReady = [false, true][Math.floor(Math.random() *2)]
//         isReady ? resolve('soup is ready'): reject('No soup today')
//     }, 2000)
//     })
//     console.log(
//         promise1
//         .then(success => console.log(success))   //then = resolve
//         .catch(no => console.log(no))   //catch = reject
//     )




// event loop will schedule tasks from microstack queue(fetch comes under this, basically all task that have promises or mutation observer) or callback queue(settimeout, ) only when the entire code is executed that is when GEC pops out of call stack. and microstack queue has more priority over callback queue

// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue. 
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

// ASYNC & AWAIT

// just add async before parameter brackets , async always returns promise
// await keyword does not assign the value until it gets result that is in form of promise

// const getTodos = async () => {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await response.json();
//     console.log(data);
// };

// getTodos();



// playDiv.onclick = () => {
// console.log("YO YO")
// }
// playDiv.addEventListener('click', function () {
//     console.log("HEYOP000",)
//     })


// document.addEventListener('keydown', function (e) {
//     if (e.key == "q") {
//         console.log("you pressed Q")
//         document.getElementById('punch').play() I
//     }
//     else {
//         console.log("NOT Q")
//     }
// })
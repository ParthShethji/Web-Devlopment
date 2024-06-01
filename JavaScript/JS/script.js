// Alaways write JS at the end of html code
// let btn = document.querySelector('button');
// btn.addEventListener('click' , inpMsg);
// function inpMsg(){
//     let name = prompt('enter your name');
//     alert("hello " + name);
//     btn.textContent = 'hello ' + name
// }

// data types
// Primitive

// Boolean
// A JavaScript Boolean represents one of two values: true or false.
// var YES = true;
// var NO = false;

// undefined
// A variable has an undefined value when no value is assigned before using
// it. So you can say that undefined means lack of value or unknown value.

// String
// A string is textual content. It must be enclosed in single or double
// quotation marks.

// null
// You can assign null to a variable to denote that currently that variable
// does not have any value but it will have later on. A null means absence
// of a value.

// Number
// Number type represents integer, float, hexadecimal, octal or
// exponential value.


// Variables
// Keywords to create variable
// let, const, var
// Naming Conventions
// Camelcase
// let firstName = "Yash";
// PascalCase
// let LastName = "Bothra";
// SnakeCase
// let middle_name = " Raj ";


// if else statement
// if (5*2 == 10)
//  {
//     console.log("Your answer is correct")
//     } else {
//     console.log("Your answer is incorrect")
// }


// switch (fruittype) {
//     case 'Narangi':
//     console.log('Narangi hai 60rs Kilo.');
//     break;
//     case 'Sabe':
//     console.log('Sabe hai 180rs Kilo');
//     break;
//     case 'Kele':
//     console.log('Kele are 35rs Kilo.');
//     break;
//     case 'Amrudh':
//     console.log('Amrudh hai 80rs Kilo.');
//     break;
//     case 'Aan':
//     console.log('Aam diya 300rs Dozen.');
//     break;
//     case 'Papita':
//     console.log('Aam ne Papita dono 300rs Dozen.');
//     break;
//     default:
//     console.log((fruittype) aaj khatam hogya kal ayega.');


// for loop
// for (let i = 0; i<10; i++) {
//     if (i & 2 == 0)
//     console.log(i)
//  } 

// while loop
// let i = 10;
// while(i>0){
//     console.log("Namaste World")
//     i--
// }

// do while loop
// do{
//     let j = 0;
//     console.log("Namaste World")
//     j++
// }
//     while(j<-100)

// functions
// function cookMaggi(maggi, pani, tapeli) {
//     console.log("Your maggie will be ready in "
//     + maggi * 2
//     + "minutes"
//     + "and Ingredients used are:"
//     + maggi
//     + "cups of water "
//     + tapeli + "pan")
//     + maggi +
//     + pani +
//     + "using"
// }
// cookMaggi(4, 8, 1);


// strings
// const str = 'Life, the universe and everything'
    // /*Length of String*/= console.log(str.length);
    // Spliting a String
// const words = str.split(' ');
// console.log(words [3]);
    // Character at String
// const index = 4;
// console.log(sentence.charAt(index));
    // Concatenation of String
    // const strl= 'Hello';
    // const str2= 'World';
    // console.log(stri.concat(, str2));
    // // expected output: "Hello World"
    
    
// As JavaScript automatically converts between string primitives and String
// objects, you can call any of the helper methods of the String object on a
// string primitive.


// Objects
// let animal = {
//     name: "Cow",
//     legs: 4,
//     }  
//     // Dot Notation I
//     console.log(animal.name);
//    // Bracket Notation
//    console.log(animal ["legs"]);

// Arrays
// let selectBooks = ["The Rudest book Ever", "Think and Grow rich", "Invisible man"]
// console.log(selectBooks)
// console.log(selectBooks[1])


// TYPES OF CONVERSION
// • STRING -- String(123) // explicit 123 +'' //implicit
// • BOOLEAN-- Boolean (2) //explicit  if (2) {...} // implicit due to logical context, !!2 implicit due to logical operator, 2 || 'hello' implicit due to logical operator
// • NUMBER
// Number ('123')    // explicit
// +'123'   // implicit
// 123 != '456'   // implicit
// 4> '5'   // implicit
// 5/null   // implicit
// true | 0   // implicit


// Factory Function
// function createCourse(title) {
//     return {
    
//     title: title,
//     enroll() {
//     console.log('you are sucessfully enrolled');
//         }
//     }
// }

// const course = createCourse('hi');
// console.log(course)
// course.enroll()

// Constructor Function
// function Course(title){
//     this.title= title,                                        // its a syntax this.
//     this.enroll = function(){
//         console.log('you are sucessfully enrolled')
//     }
// }
// const course = new Course('Javascript');                 // new is a keyword that makes new empty object and passes this object in that
// course.enroll()
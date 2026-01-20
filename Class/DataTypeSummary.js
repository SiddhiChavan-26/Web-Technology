//types - primitive and non primitive
//primitive - numbre, bigINt, boolean, 

//symbol example - used when there is unique id
let anotherId = Symbol("123");
console.log(anotherId );
console.log("typeof anotherid : "+ typeof(anotherId));

const id = 123;
console.log(id === anotherId);

//javaScript is dynamic or static ---> dynamic
//non primitive - object , array , function
//array 
const arr = ["Siddhi", "Ankita", "Anuradha"];
const num = [1, 2, 3, 4, 5];

//objects - collection of key value pairs
let obj = {
    fName : "Js",
    age : 20
};
console.log("name : " + obj.name);
console.log("age : " + obj.age);

//functions - block of code that perform specific task
//what is function definition
//what is function declaration
function fun(){
    console.log("Siddhi");
}

//function alias
const myFunction = fun;
console.log(myFunction);





//string , array , object , function
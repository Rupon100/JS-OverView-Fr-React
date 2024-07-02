/* 

//scope
//we can access any varible from inside function but can't access them from outside
var lang = "Bangla";

function learn(topic){
    lang = topic;//here we redeclear lang as topic
    console.log(`I'm learning ${lang}`);
    //if we declare a var here we can access from outside
    const a = {
        b:5,
    }
    a.b = 8;//but can't resign a to another varible like a = b;
    console.log(a);
}
learn("Javascript");
console.log(lang);//varible will comes from function as topic not "Bangla"

//var vs let vs const
//let and const is a blocked scoped we can't use let variable outside of a function
//always use let in your project if not need to redeclear of a varible then use const

 */



/*

//Normal function (statement)
//if we do not return a function by default it returns something
function hello(){
    console.log("Hello world");
    //return undefined;(its return like this)
}
let msg = hello();
console.log(msg);//it's return undefined
 

//function(expression)
const hola = function(){
    console.log("Hola there!");
    //here's also return undefined like before
}
console.log(hola());
 

//named function expression
const test = function tost(){
    console.log("test named function!");
    //return undefined;(its return like this)
}
console.log(test());
 

//arrow functino
const arrow = () =>  88;//we don't need to write return in arrow function if single line
console.log(arrow());
//if want to return a object then do this
const turn = () => ({
    a:4,
    b:5
});
console.log(turn());


//anonymous function
function anony(){
    return () => {//this is called anonymous function because there is no name for function, we can use here not only arrow function but also normal function
        console.log("Anonymous Function!");
    }
}
anony()();
*/
 
 

/*

//premetive type value--(string, number, boolean)
let x = 5;
let y = 6;
x = y;
y = 7;
console.log(x)
console.log(y);

//referance type value--(object, array)
let a = ["Js","Python"];
let b = ["HTML","CSS"];
b = a;
console.log(b);
console.log(a);
a.push("GO");
console.log(a);
console.log(b);//here we are not push "GO" into b but it shows us
*/




//Array method
/*
//Array.find
const fruits = ["Banana","Orange","Lemon","Mango"];
const result = fruits.find((f) => f === "Banana" || f === "Lemon");//here find method always return only first one value.
//if we want to find array index then need to use fruits.findIndex method
console.log(result);
*/
 
/*
//Array Filter
const fruits = ["Banana","Orange","Lemon","Mango"];
const result = fruits.filter((f) => f === "Orange" || f === "Mango");
//here it's return two value
console.log(result);
*/
 
/*
//slice method
const fruits = ["Banana","Orange","Lemon","Mango"];
const result = fruits.slice(1,3);//slice(start, end)
//using slice we can cut  varible from array and return cutting value
console.log(result);
*/
 
/*
//splice()
const fruits = ["Banana","Orange","Lemon","Mango"];
const result = fruits.splice(1,1,"hola");//index where from we want start cutting our array element and from there how much element we want to cut
console.log(result);//this showing us the cutting value
console.log(fruits);//this showing us the all array value but not the cutting value
*/

/*
//concat() method
const fruits = ["Banana","Orange","Lemon","Mango"];
const result = fruits.concat(["Hola"]);//concat jus add array element to the last of an array
console.log(result);
console.log(fruits);//concat not gonna change main array
*/
 
/*
//map method
const fruits = ["Banana","Orange","Lemon","Mango","Apple","Lemon"];
const result = fruits.map((f) => {
    if(f === "Lemon"){
        return "Ok";
    }else{
        return "N/A";
    }
});//map can transform all element of an array
console.log(result);
console.log(fruits);

const num = [2,3,4,5,6,7];
const rslt = num.map((n) => {
    return n*2;
});
console.log(rslt);
console.log(num);

const nam = ["rupon","mia","fardiya","loamn"];
const change = nam.map((na) => na.toUpperCase());
console.log(change);

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const names = users.map((user) => user.name);
console.log(names); 

const numbers = [1, 2, 3, 4, 5];
const numberToString = numbers.map((n) => n.toString());
console.log(numberToString);

const nom = [25,4,9];
const nomSqrt = nom.map(Math.sqrt);
console.log(nomSqrt);

*/
 




/*
//reduce method
const numbers = [1,2,3,4,5];
const result = numbers.reduce((total, currentValue) => total + currentValue, 0);
console.log(result);

const arrayOfArrays = [[1,2],[3,4],[6,7]];
const concatArray = arrayOfArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
},[]);
console.log(concatArray);

//forEach method
const number = [1,2,3,4,5,6];
let sum = 0;
number.forEach((number) => {
    sum += number;
})
console.log(sum);

const nam = "Rupon";
for(num of nam){
    console.log(num);
}

const language = {
    name: "JS",
    year: 1995,
    creator: "Brendan Eich"
}
for(property in language){//for using property we will get only key  and for using key will get value of those property
    console.log(property);
}
*/

 



/*
//Objects key and value
const lang = {
    name: "Rupon",
    age: 19,
    class: 13
}
//console.log(Object.keys(lang));
//console.log(Object.values(lang));
//console.log(Object.entries(lang));//this make every key and value into another array
lang.popularity = "0.01%";
console.log(lang);

const name = "alice";
const age = 20;
const person = {
    name,
    age
}
console.log(person);

const propName = 'age';
const anoPerson = {
    name: "Hola",
    propName: 25
}
console.log(anoPerson);

const person2 = {
    name1: "Bob",
    age1: 29
}
const {name1, age1} = person2;
console.log(name1);

const person3 = {
    name3: 'Alice',
    age3: 25,
    location: 'Wonderland'
}
const{name3, ...rest} = person3;
console.log(rest);

const personLast = {
    nameLast: "Mia",
    ageLast: 28
}
const updatePerson = {
    ...personLast,
    location: "Happy Homes",
    road: "Masjid Road"
}
console.log(updatePerson);
*/
 




/*
//rest operator
function sum(text,...rest){
    const av = rest.reduce((sum,cur) => sum + cur,0);
    return `${text} ${av}`
}
console.log(sum("Total: ",3,4,5,6));

function sume(...numbers){
    return numbers.reduce((ttl,sm) => ttl + sm, 0);
}
console.log(sume(2,3,3,4));

const user = {
    name: "Alice",
    age: 25,
    city: "Wonderland",
    occupation: "Developer"
};
const {name, age, ...restUser} = user;
console.log(restUser);

function multiply(mul, ...arg){
    return arg.map(arg => arg * mul);
}
console.log(multiply(1,2,3,4,6,7));

const sumAll = (...nums) => nums.reduce((acc,tt) => acc + tt,0);
console.log(sumAll(2,3,4,5));
*/



/*
//truthy-falsy value
//falsy value in JS(false, 0, undefined, null, '',NaN)
const result = [];
if(!result){
    console.log("check it");
}else{
    console.log("check it again");
}
*/


/*
//ternary operator
const a = 6;
const teran = (a%2 === 0) ? "its even" : "odd";
console.log(teran);
*/



 

/*
//destructuring
const user = {
    name: "Alice",
    age: 30,
    job: "Engineer",
    mobile: {
        model: 12,
        price: 12000
    }
};
const {mobile: {model,price} = {}} = user;
console.log(model);
console.log(price);
*/

 


// //Optional chaining
// const user = {
//     name: "Alice",
//     age: 30,
//     job: "Engineer",
//     education: {
//         class: 12,
//         school: {
//             name: "NDCM"
//         }
//     }
// };
// console.log(user?.education?.school?.name);


// //Nullish Coalesing Operator(nullish -- null, undefiend)
// let lang = false;
// console.log(lang ?? "Javascript");
// //nullish / (||) no same if we taste it with falsy value
// console.log(lang || "Javascript");
// console.log(lang ?? "Javascript");
 
// const userName = "Hello";
// const defaultName = "Rupon";
// const name = userName ?? defaultName;
// console.log(name);

// const emptyStrinf = true;
// const fallbackString = "Fallback";
// const result = emptyStrinf || fallbackString;
// console.log(result);




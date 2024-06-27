console.log("before async function code writeen");
async function printName(Name){   //note we can create any function as async function   by writing async keyword with function it will return promises by default
console.log('your Name is: '+Name); 
setTimeout(()=>{
console.log('testing async');
},7000);
}
//printName("sukesh");

console.log("after async function code writen");

async function viewName(){
 await printName("sarang");// note we can use await only inside async function// await will wait for promise and stops the execution till the promise not settled.
 console.log('after the main code executed');
 await printName("sarang");// here second function will wait to complete first function that's a main use of await 
 
}
let promise=viewName();

/*
let data = fetch("https://reqres.in/api/users?page=2");
console.log(data);
*/
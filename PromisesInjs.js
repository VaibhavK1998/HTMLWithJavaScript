/*
let promise=new Promise((resolve,reject)=>{
  
console.log('promise handle');
//resolve("promise check");// if the task then this method will set status fullfilled
//reject('this work erjected'); if the task rejected then this reject method will set status reject
});

*/

function getPromise(){
  return new Promise((resolve,reject)=>{
  console.log('before promise');
  setTimeout(()=>{
    console.log("i am inside set timout function")
   resolve('completed the printing');
  },7000);
  
})
}

let promiseStatus;
let promise=getPromise();
let result=promise.then((result) => {           // we use this then() method when if we wan't to execute anythinh after the our promise fullfilled
  console.log("promise completed succsefully");
  promiseStatus="complete";
  console.log("promiseStatus: "+promiseStatus);
  return promiseStatus;
});

console

console.log("result: "+result);
promise.catch((err)=>{
  console.log("promise rejected");// we use this catch() method when if we wan't to execute anythinh after the our promise rejected
})

console.log("the testing 1");
console.log("the testing 2");
/*
let output=new Promise((resolve,reject)=>{
  console.log('before promise');
  setTimeout(()=>{
    console.log("i am inside set timout function")
    resolve('completed the printing');
  },7000);
  
})

*/

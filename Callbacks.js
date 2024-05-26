function printword(){
  for(let a=10;a<20;a++){
    console.log(a);
  }
}

// to pass one function as parameter in other function is called callback in js

function viewWord(printword){
  return printword();
}

viewWord(printword);


/* callback hell*/

function getStud(){
  console.log('student data');
}

function getData(data){
console.log("data:"+data);
setTimeout(getStud,5000);
}

getData(100);
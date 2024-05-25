function printWord(){
  for(let a=10;a<20;a++)
  console.log(a);
}

//printWord();


function getWords(ptm){
let p=printWord;
console.log(p);
console.log("this is get word");
}
//getWords(printWord());

function add(p1,p2){
  return p1+p2;
  }

  function checkadd(add){
console.log('addition of two variables:'+add);
  }

  checkadd(add(10,20));
let a=10;
let b=20;
let d=90;

console.log(a);
console.log(b);
try{
  console.log(c);
}catch(err){
  let c=100;
  console.log(err);
}

console.log(d);
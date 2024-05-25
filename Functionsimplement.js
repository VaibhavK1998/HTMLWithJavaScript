// syntax 1 to create function in js
function print1to100(){
  for(let a=1;a<100;a++)
  console.log(a);
}
print1to100();

// syntax 2 to create function with params

function sum(m,n){
console.log("value of two numbers:"+(m+n));
}
sum(10,20);

function multi(k,l){
let p=k*l;
return p;
}

console.log("multi:"+multi(90,40));

let sub=(h,i) => {
  console.log(h+" "+i);
  console.log("subtraction:"+(h-i))
  return h-i;
}
sub(200,100);


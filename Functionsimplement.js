// syntax 1 to create function in js
function print1to100(){
  for(let a=1;a<10;a++)
  console.log("print number: "+a);
}
print1to100();

// syntax 2 to create function with params
let multiplication=function multi(k,l){
let p=k*l;
return p;
}

console.log("multi:"+multiplication(10,20));

//way 3 to create function using Arrow 
let sub=(h,i) => {
  console.log(h+" "+i);
  console.log("subtraction:"+(h-i))
  return h-i;
}
sub(200,100);



let username=(Name)=>{
  console.log(`  name of the person is ${Name}`);
}
username('rakesh');
let ar=[10,290,90,3903];

ar.map((val)=>{
  console.log(val);
})

let ar2=[20,90,44,56,89];

let even=ar2.filter((val)=>{
  return val%2==0;
})

console.log('even number array:'+even);
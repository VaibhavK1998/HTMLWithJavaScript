/* for loop */
console.log("-------------------------------from below for loop result we are printing-----------------------------------------");
let sum=0;
for(let a=10; a<=15;a++){
  console.log(a);
  sum=sum+a;
 // if(a==11) break;
}
console.log("sum:"+sum);

/* while loop */
console.log("-------------------------------from below while loop result we are printing-----------------------------------------");

let b=1;
while(b<10){
  b++;
}
console.log('value of b:'+b);

console.log("-------------------------------from below do-while loop result we are printing-----------------------------------------");
/* do-while loop */
let a=10;
do{
  console.log('a:'+a);
  a++;
}while(a<20);

console.log('a:'+a)
console.log("-------------------------------from below for-of loop result we are printing-----------------------------------------");
/* for of loop */

let listOfItem=[100,200,900,800];
let surname="kitukale"
for(let value of surname){     // this loop working same as for-each loop in java to iterate element from objects.
  console.log('value:'+value);
}

console.log("-------------------------------from below for-in loop result we are printing-----------------------------------------");
/* for-in loop */

let item={
  'apple':10,
  'mango':200,
  'greaps':300
};

for(let value in item){
  console.log("key="+value+ "   " +"value="+item[value]);
}
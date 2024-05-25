/*
let data={id:101,name:"vaibhav"};
console.log(data.name);

let data2=[10,20,30,40];
console.log(data2[0]);
 */

let age=prompt("enter your age");
console.log(age);
flag;

  if(age<18 &&flag==false){
    console.log(age);
    age=prompt('age should not less than 18');
   return flag=false;
  }else if(age>65&&flag==false){
    console.log(age);
   age=prompt('age should not be greater than 65');
   return flag=false;
  }else{
    console.log(age);
  }



/*Number dataTypes*/
const age=90;
console.log('data type of age is:'+typeof(age));/*Nuhere js internally understand the what data type of this age*/

/* String dataType */
let Name='Rajesh';
console.log('data type of Name is:'+typeof(Name));

/*boolean datatypes*/
let result=false;
console.log('data type of result is:'+typeof(result));

/*undefined datatype*/
let salary;
console.log('data type of t salary:'+typeof(salary));

/*null dataTypes note in primitive datatype null consider as datatype as object but internally its a null means no object present*/
let pot=null;
console.log('data type of pot:'+typeof(pot));

/*BigInt dataType*/
let amount=BigInt(200200);
console.log('data type of amount:'+typeof(amount));

/* symbol dataType */

let  ruppesSymbol=Symbol('Rupess');
console.log('data type of rupees:'+typeof(ruppesSymbol));

/* non-primitive data types */

/*object datatype*/
const personalInfo={empName:'suresh',empId:100};
console.log('data type of personalInfo:'+typeof(personalInfo));
empName=personalInfo.empName="mahesh";
console.log(personalInfo);

/* worl with object*/
let info={
  id:10,
  designation:'tester',
  previousComapny:{
first:'amazon',
second:'amdocs',
third:'Tcs'
  },
  hobbies:['cricket','hollyball','music'],
  surname:'kitukale'
}

console.log('hobbies:'+info.hobbies[0]);
console.log('companyHistory:'+info.previousComapny.first);
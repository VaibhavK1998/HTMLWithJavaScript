/*
below we can see that our object employee has some properties and methods
Name is a property and personalInfo is a method
*/

const employee={
  Name:'saroj',
  Salary:10000,
  personalInfo: function(){
    console.log('name is:'+this.Name);// this refer to current object employee
  },
  salary(){
    return this.Salary;
  }
}
const History={
  history:['tata','mahindra','bajaj'],
  previousHistory(){  // note we can write function in this manner also in object mostly we write methos in this way
  return this.history;
  }
}
const company={
  companyName:'Tcs',
  location: 'pune'
}

console.log('history: '+History.previousHistory());
/* how to set prototype by manually with user defined object*/
company.__proto__=employee; // when we use this then we can access the methods of employee object also by the object of company
//company.__proto__=History;
company.personalInfo();
console.log(company.salary());




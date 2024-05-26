class Student{
  Name='rakesh';

  getName(){
    return this.Name;
  }

  sum(a,b){
  let add=a+b;
  return add;
  }
}

let std=new Student();
console.log(std.getName());
std.sum(10,20);
console.log(std.sum(10,20));

/* constructor uses*/
class Teacher{

  Name=null;
  age=null;
  constructor(Name,age){     // here we created parameterized constructor
this.Name=Name;
this.age=age;
  }

}

let teacher=new Teacher('Rakesh',90);
console.log(teacher.Name);
teacher.Name="manoj";
console.log(teacher.Name);
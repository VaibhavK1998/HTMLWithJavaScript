/* super keyword use*/

class Person { 
  constructor(id) { 
      this.id=id; 
      
  } 
  atWork() { 
      return this.id + " is at work, "; 
  } 
  atHome() { 
      return this.id + " is at home"; 
  } 
  sleeping() { 
      return this.id + " is sleeping"; 
  } 
} 
class FashionDesigner extends Person { 
  constructor(name, age) { 
      super(10); 
      this.name=name;
      this.age=age;
  } 
  profession() { 
      return this.name + 
          " is a Fashion Designer"; 
  } 
  doTasks() { 
      return super.atWork() + this.profession(); 
  } 
} 
function display(content) { 
  console.log(content); 
} 


const character = new FashionDesigner("Sayan", 30); 
display(character.profession()); 
display(character.atHome()); 
display(character.doTasks()); 

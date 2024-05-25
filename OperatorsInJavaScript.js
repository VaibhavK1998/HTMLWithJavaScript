/* comparison operator*/
let a=10;
let b=20;
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
console.log(a===b);
console.log(a!=b);

/*Relational operator */
let area1=200;
let area2=46;
console.log(area1+area2);
console.log(area1-area2);
console.log(area1/area2);
console.log(area1*area2);
console.log(area1%area2);
console.log(3**2);


/* Unary operator*/
let c=10;
let d=19;
c++;
d--;
console.log(c);//increment operator
console.log(d);//decrement 

let e=20;
console.log(++e);// pre process it will first add the value and then print the value
console.log(--e);

let n=40;
console.log(n++);// it's a post process it will first print the value and then add the value that's why to see it's result we need to print once again this variable
console.log(n);

let m=10;
console.log(m+=5);

/* ternary operator */

let age=70;

let result=age>18?"eligible for vating":"not eligible for voting";
console.log(result);

/*if statement */
if(90<100){
  console.log("90 is less than 100");
}

/*if else statement */

if(100<20){
  console.log("10 is less");
}else{
  console.log("10 is not less than 20");
}

/* else if statement */

let a=100;

if(a==90){
  console.log("a is less than 90")
}else if(a>100){
  console.log("a is greate than 100")
}else{
  console.log("a is neighter 90 and not greater than 100")
}

/* switch statement */

city="amravaddti";

switch(city){
  case 'chandurBazar':
    console.log("chandur bazar city");
    break;
    case 'amravati':
    console.log("amravati city");
    break;
    case 'pune':
    console.log("pune city");
    break;
    case 'paratwada':
    console.log("paratwada city");
    break;
    default:
      console.log(city);
      break;
    
}

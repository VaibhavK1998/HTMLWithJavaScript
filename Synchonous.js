
console.log('1');
console.log('2');
console.log('3');



function printer(){
  console.log('this is test sunchonous behaviur');
}

setTimeout(printer,5000);// whatever time we mentioned here it will execute code after this duration complete means this line will execute after 5second
console.log('4');
console.log('5');


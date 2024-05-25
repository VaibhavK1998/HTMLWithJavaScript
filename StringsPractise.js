let str='Rajsthan';// this is a type one to create string
let str2="mahan";// this is type two to create any string
let str3=`automation`;
let num=100;
console.log(`number is ${num}`);
// below is the string properties and methods
console.log("str3:"+str3);
console.log('length:'+str.length)
console.log('char at index :'+str.charAt(3));
console.log(' index of char :'+str.indexOf('t'));
console.log(str[2]);
console.log(str.concat('beauty'));
console.log(str.includes('o'));
console.log("uppercase:"+str.toUpperCase());
console.log("lowercase:"+str.toLowerCase());
console.log("starts-with:"+str.startsWith('k'));
console.log("replace method:"+str.replace('R','M'));
console.log("slice method use:"+str.slice(1 , 4 ));
let nstring=str.split('a');
for(let newWord of nstring){
  console.log("splitted string word:"+newWord);
}


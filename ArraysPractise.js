let money=[2000,2992,94004,93003];
let aray2=['aman','rajsesh',false,39003];
console.log("array2:"+aray2);
console.log('length of array:'+money.length);

console.log('money2:'+money[2]);

// fetching all values from array using for of loop
for(let mons of money){
  console.log(mons);
}

aray2[2]=true;// we use this to update value of object
console.log('new value of aray2:'+aray2);

// fetching all values from array using for loop
for(let a=0; a<aray2.length;a++){
  console.log('prinnt array2 objects:'+aray2[a]);
}

// some useful method in array
aray2.push(9000);// we use this to add new value in array
console.log("array2:"+aray2);
console.log('pop method use:'+aray2.pop(2));// pop method is use to delete and return value from array
console.log("array2:"+aray2);
console.log("two string method:"+aray2.toString());// this method returns the array into one complet string 
console.log("--------------------------------------------------------------------------------");

let ar1=[67,930,4804,30];
let ar2=[859,4903,46894,4904];
let ar3=ar1.concat(ar2);
console.log("ar3:"+ar3);

ar3.unshift(10);// this method use to add element at the start of the array
console.log(ar3);
ar3.shift();// this method is use to delete and return element from first index
console.log(ar3);

console.log("slice mthod use:"+ar3.slice(1,4));// this method return the value from the range between 
console.log("ar3:"+ar3);
ar3.splice(2,3,10,20,909);// here splice method first pam is the index from where to start second index-3 means how much next elemnt to remove and add, 10,20,and 909 is the new element which we are adding in the place of delete emelent
console.log("splice method use:"+ar3);

let ar4=[100,300,400,904];

ar4.forEach(function mfunction(value){// .forEach loop we only used with the array
console.log("ar4:"+value);// note this forEach store this retrive value from array in the param value
});
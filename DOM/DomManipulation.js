/* diffrent ways to select element from DOM */


let heading2Name=document.getElementById("heading2");
console.log(heading2Name);

let classHeading=document.getElementsByClassName("classHeading");
console.log(classHeading);

let param=document.getElementsByTagName("p");
console.log(param);

let head2gain=document.querySelectorAll("p");// it return firect element related with this selector/p tag
console.dir(head2gain);
console.log(head2gain);

///////////////////////////////////////////////////////////////////////////////////////////////
/* dom manpilation or to work with element properties */
console.log("tagName: "+heading2Name.tagName);// it returns tagName of element
console.log("innerText of heading: "+heading2Name.innerText);// it returns text content of elements and all it's childrens;
console.log(heading2Name.innerHTML);// it returns plain text or html contents of element.
document.querySelector("h1").innerText="new h1 heading text";
console.log(document.querySelector("h1").innerText);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

//////////////////////////////////////////////////////////////////////////////////////////////////////
/*Dom attribute Manipulation */
console.log("attribute value:"+document.querySelector("h4").getAttribute('version'));// this methos use to get the value of attribute
document.querySelector("h4").setAttribute('version',102);// this method is used to set the value of attribute
console.log("attribute value after version change:"+document.querySelector("h4").getAttribute('version'));

/*style manipulation via js */
let btn1 = document.querySelector('button');
btn1.style.color='red';
btn1.style.backgroundColor='yellow';
btn1.style.fontSize='40px';
btn1.innerText="press me";

/*append operation
let newbtn=document.createElement('button');
newbtn.innerText='second btn';
let appendDiv=document.getElementById('#appendtest');
appendDiv.append(newbtn);
*/

 /* let newbtn=document.createElement('li');// here we are creating element li
  newbtn.innerText='added new li element';
  let appendDiv=document.querySelector('ul');// here we are selecting the tag where inside we have to append our new element li
  appendDiv.append(newbtn);// aapend method add the element at last in mentioned tag(inside).
  appendDiv.prepend(newbtn);// it is used to add the element at first in mentioned tag(inside).
  appendDiv.before(newbtn);// it is used to add the element before/outside the mentioned node*(outside).
  appendDiv.after(newbtn);//it is used to after the element after/outside the mentioned node(outside).
  */

 let a=0;
 while(a<5){
  gae=90;
  let row=document.createElement('tr');
//row.innerText='rownewlu';
let appendDiv=document.querySelector('table');
appendDiv.append(row);
let data1=document.createElement('td');
let data2=document.createElement('td');
let data3=document.createElement('td');
data1.innerText="column1";
data2.innerText="column2";
data3.innerText="column3";

row.append(data1);
row.append(data2);
row.append(data3);
a++;
 }
  
 let newTable=document.querySelector('table');
 //newTable.remove();
 




 






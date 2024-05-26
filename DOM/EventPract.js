//let clr=document.body.style.backgroundColor='black';
let btn1=document.querySelector('#btn1');
btn1.onclick=()=>{
  document.body.style.backgroundColor='pink';
}

let btn2=document.querySelector('#btn2');
btn2.ondblclick=()=>{
 document.querySelector('h2').innerText="double btn clicked succesfully";
}

let btn3=document.querySelector('#btn3');
btn3.onkeydown=()=>{
  alert('keypress down succesfully');
};



/*work with event object*/
let btn4=document.querySelector('#btn4');
btn4.onmouseover=(e)=>{
  console.log(e); // note here the details about the event will be store in object e and by using this object we can use their property to get the information related to event
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
  document.body.style.backgroundColor='orange';
}
btn4.onmouseout=()=>{
  document.body.style.backgroundColor='white';
}

/*work with Event Listner */
/*when we use event listner then every time this event will happen whenever we perform this actions this callback function will call everytime we can use multiple handler with our event using addEventListner the second one not override existing implementations
it will execute it's own implementation i.e why it is useful we can manage muliple actions*/
let btn5=document.querySelector('#btn5');
let a=0;
btn5.addEventListener('click',function fun(e){
  a++;
  console.log(a);
})


btn5.addEventListener('click',function fun(){
  document.body.style.backgroundColor='blue';
})


/*
let btn5Hover=btn5.addEventListener('mouseover',function fun(){
  alert('handler 3 works');
})
*/

let CurrentMode='light';
let btn6=document.querySelector('#btn6');

btn6.addEventListener('click',function md(){
  console.log('click success');
if(CurrentMode=='light'){
  CurrentMode='dark';
  document.body.style.backgroundColor='black';
}else{
  CurrentMode='light';
  document.body.style.backgroundColor='white';
}
});


/* remove eventListner*/
const btHand=()=>{
  alert('handler 3 works');
}
btn5.addEventListener('mouseover',btHand);
btn5.removeEventListener('mouseover',btHand);// we use this method to remove event listner

/*diffrent windows method to load url */
let btn7=document.querySelector('#btn7');
btn7.addEventListener('click',function loadurl(){
 // window.location.href="https://www.openai.com"; Sets or gets the complete URL of the current page.
 //window.location.assign("https://www.openai.com"); Loads a new document. and you can move back to previous page
 //window.location.replace("https://www.openai.com"); window.location.replace(): Replaces the current document with a new one. The difference from assign() is that replace() removes the current page from the session history, meaning the user won't be able to navigate back to it using the back button.
 //window.location.reload(); // Reloads from cache
 //window.location.reload(true); // Reloads from server
 //window.open('https://www.openai.com');//Opens in a new window or tab
 //window.open('https://www.openai.com', '_blank');// Opens in a new tab
 //window.open('https://www.openai.com', '_self');// Opens in the same frame
 //window.open('https://www.openai.com', '_parent');// Opens in the parent frame
 //window.open('https://www.openai.com', '_top');// Opens in the full body of the window
});


/*
window.location.href = 'https://www.example.com';
window.location.assign('https://www.example.com');
window.location.replace('https://www.example.com');
window.location.reload(); // Reloads from cache
window.location.reload(true); // Reloads from server
window.open('https://www.example.com'); // Opens in a new window or tab
window.open('https://www.example.com', '_blank'); // Opens in a new tab
window.open('https://www.example.com', '_self'); // Opens in the same frame
window.open('https://www.example.com', '_parent'); // Opens in the parent frame
window.open('https://www.example.com', '_top'); // Opens in the full body of the window

 */
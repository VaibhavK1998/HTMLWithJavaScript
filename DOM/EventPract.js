let clr=document.body.style.backgroundColor='black';
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

let btn4=document.querySelector('#btn4');
btn4.onmouseover=(e)=>{
  console.log(e); // note here the details about the event will be store in object e and by using this object we can use their property to get the information related to event
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
  document.body.style.backgroundColor='orange';
}

/*work with event object */


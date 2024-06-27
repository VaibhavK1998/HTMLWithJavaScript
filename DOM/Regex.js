
let mainPrice=1000;
let Discount=10;
let finalPrice=mainPrice-(mainPrice*Discount/1000);
let mPrice=document.querySelector('#price1');
mPrice.innerText=mainPrice;

let discount=document.querySelector('#discount');
discount.innerText="10%";



let price=mainPrice-(mainPrice*Discount/100);
let FinalP=document.querySelector('#finalPrice');
FinalP.innerText=price;
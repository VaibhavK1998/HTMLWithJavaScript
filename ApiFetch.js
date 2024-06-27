//const URL="https://cat-fact.herokuapp.com/facts"
// const URL="https://groww.in/v1/api/stocks_data/explore/v2/indices/GIDXNIFTY100/market_trends?discovery_filter_types=TOP_GAINERS&size=10";
// // let result=fetch(URL);
// // console.log(result);
// const par=document.querySelector("#fact");

 async function getData(){
  let response=await fetch(URL);// note fetch() method returns a promise and response of the api.
  console.log(response);
  console.log(response.status);
  //console.log(response.statusText);
  
  let data= await response.json();// it is used to conver JSON into javascript object
  //par.innerText=data[1].text;
  console.log(data);
  console.log(data[1].status.verified);
  console.log(data[1].user);
 }



let btn1=document.querySelector('#catData');
btn1.onclick=()=>{
  getData();
}

/* post request send via frontend*/

async function createUser(){
  const url2 = 'https://reqres.in/api/users'; // Replace with your API endpoint
  const data = {
    name: 'saroj',
    job: 'sdet'
  };
  
  await fetch(url2, {
    method: 'POST', // HTTP method
    headers: {
      'Content-Type': 'application/json' // Specify the content type
    },
    body: JSON.stringify(data) // Convert data to JSON string
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('Success:', data); // Handle the success response data
  })
  .catch(error => {1
    console.error('Error:', error); // Handle errors
  });
  
}


let pdata=document.querySelector('#postData');
pdata.addEventListener('click',createUser);

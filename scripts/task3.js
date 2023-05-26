function add (number1, number2, number3, number4, number5){
    return number1 + number2 + number3 + number4 + number5;
}

// Function to calculate the values for player 1

function addPlayer1 (){
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let addend3 = parseInt(document.querySelector('#addend3').value);
    let addend4 = parseInt(document.querySelector('#addend4').value);
    let addend5 = parseInt(document.querySelector('#addend5').value);
    let result =  add(addend1, addend2, addend3, addend4, addend5);
    document.querySelector('#sum').value = result;
}
document.querySelector('#addPlayer1').addEventListener('click', addPlayer1);


function addPlayer2 (){
  let addend6 = parseInt(document.querySelector('#addend6').value);
  let addend7 = parseInt(document.querySelector('#addend7').value);
  let addend8 = parseInt(document.querySelector('#addend8').value);
  let addend9 = parseInt(document.querySelector('#addend9').value);
  let addend10 = parseInt(document.querySelector('#addend10').value);
  let result =  add(addend6, addend7, addend8, addend9, addend10);
  document.querySelector('#sum2').value = result;
}
document.querySelector('#addPlayer2').addEventListener('click', addPlayer2);


// This gets the date

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;

document.querySelector('#year').innerHTML = year;




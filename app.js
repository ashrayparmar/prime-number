var btn = document.querySelector("#btn");
var number1 = document.querySelector("#input");
var result = document.querySelector("#output");
var reset = document.querySelector("#reset");

function clickHandler() {

    var number = number1.value;
    var isPrime = true;

    if (number == 1) {
        result.innerText = "1 is neither prime or composite number!"
        }
 
     else if(number>1) {
         for(let i =2; i<number;i++) {
             if(number % i === 0) {
                 isPrime = false;
                 break;
             }
         }
         if (isPrime) {
            result.innerText = number + " is a prime number!"
         } else {
            result.innerText = number + " is not a prime number!"
        }
     }    
}

function resetHandler() {
    number1.value = "";
    result.innerText = "";
}

btn.addEventListener("click", clickHandler)

reset.addEventListener("click", resetHandler)
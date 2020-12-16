var btn = document.querySelector("#btn");
var number1 = document.querySelector("#input");
var result = document.querySelector("#output");

function clickHandler() {

    var number = number1.value;
    var isPrime = true;


    if(number <= 1 || number >= 31) {
        console.log("Please enter valid date");
    } 

    if (number == 1) {
       console.log("1 is neither prime nor composite number.");
       }

    else if(number>1) {
        for(let i =2; i<number;i++) {
            if(number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
}

btn.addEventListener("click", clickHandler)
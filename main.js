const age = 99;

if (age < 21) {
    console.log("Stay Away!");
} else {
    console.log("Partayyyyyy!!!")
};

if (age >= 21) {
    console.log("Partayyyy!!!")
} else {
    ("Better have your mom come get you")
};

const authenticated = false;

if (authenticated) {
    console.log("You are logged in")
} else {
    console.log("Please log in")
};

authenticated === true //Checks data type
authenticated == true //Only checks the value

const a = 1;
const b = '1';

// a === b //false
// a == b //true

// a !== b //true
// a != b //false

const favoriteColor = "green";
const favoriteAnimal ="toxirn"

if (favoriteAnimal === "toxirn" && favoriteColor === "green") {
    console.log("Welcome to the club!")
} else if (favoriteAnimal === "cat" || favoriteColor === "red") {
    console.log("$500 to join the club")
} else {
    console.log("Go away!")
};

const h1Div = document.getElementById("h1");
console.log(h1Div);

const pie = "sugar cream";

console.log('pie length:', pie.length);
console.log('#3', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat')); //returns -1
console.log('index of sug', pie.indexOf('sug'));


const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "ain't");
console.log('newQuote', newQuote);


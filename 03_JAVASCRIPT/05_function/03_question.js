// Write a JavaScript function to print the “Hello World” message.
function hello() {
    // console.log("Hello world");
    return;
}
hello()
// Write a function that returns the square of a number.
function square(x) {
    return x * x
}
//console.log(square(64));

// Write a function to convert Celsius to Fahrenheit.
function celciucs(c) {
    return (c * 9 / 5 )+ 32;

}
// console.log(celciucs(37));

// Write a function to find the area of a given Rectangle.
function rectangle (h,b) {
    return h * b;
}
// console.log(rectangle(8,15));

// Write a function to find the area and perimeter of a Circle.
function Circle (radius) {
    if(radius!=null){
        return 'area: ', 2*3.14*radius;
    }
}
// console.log(Circle(5));

// Write a JavaScript function that reverses a number.
let num1 = 123456789;
let result = num1.toString().split('').reverse().join('');
// console.log(result);

// Write a JavaScript function that checks whether a passed string is a palindrome or not.
let string = "313" ;
let palindrome = string.split("").reverse().join("");
if (palindrome == string){
    // console.log(string, ": ", "it is a palindrome 😊");
}else{
    // console.log( string, ": ",  "it is not a palindrome 😥");

}

// Write a JavaScript function that generates all combinations of a string.
let possibleCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.str.slice(i, j);
        }
    }
    return combinations;
}
console.log(possibleCombinations('Dog'));
// Write a JavaScript function thpush(at returns a string that has letters in alphabetical order.

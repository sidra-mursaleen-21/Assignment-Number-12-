// USER INPUT & CONDITIONAL STATEMENT

// q no 1

// var city = prompt("enter the city");

// if (city === "karachi"){

//     alert("Welcome to city of lights");

// }

// q no 2

// var gender = prompt("Enter your gender");

// if (gender === "male") {

//     alert("Good Morning Sir");

// }

// else if (gender === "female") {

//     alert("Good Morning Ma’am");

// }

// q no 3

// var color = prompt("Enter Color") , message = "" ;

// if (color === "red") {

//     message = "Must Stop"

// }

// else if (color === "yellow") {

//     message = "Ready to move"

// }

// else if (color === "green") {

//     message = "Move now"

// }

// alert(message);

// q no 4

// var fuel = +prompt("Enter fuel in litres");

// if (fuel < 0.25) {

//     alert("Please refill the fuel in your car")

// }

// q no 5 (par a)

// var a = 4;

// if (++a === 5) {

//     alert("given condition for variable a is true");

// }

// true

// q no 5 (part b)

// var b = 82;

// if (b++ === 83) {

//     alert("given condition for variable b is true");

// }

// false

// q no 5 (part c)

// var c = 12;

// if (c++ === 13) {

//     alert("condition 1 is true");

// }

// false

// if (c === 13) {

//     alert("condition 2 is true");

// }

// true

// if (++c < 14) {

//     alert("condition 3 is true");

// }

// false

// if (c === 14) {

//     alert("condition 4 is true");

// }

// true

// q no 5(part e)

// var materialCost = 20000;

// var laborCost = 2000;

// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {

//     alert("The cost equals");

// }

// true

// q no 5(part f)

// if (true){

//     alert("True");

// }

// true

// if (false){

//     alert("False");

// }

// false

// q no 5(part g)

// if("car" < "cat"){

//     alert("car is smaller than cat");

// }

// true

// q no 6

// var marksObtained = +prompt("Enter your Obtained Marks"),
//   totalMarks = 300,
//   percentage = (marksObtained / totalMarks) * 100;

// if (percentage >= 80 && percentage <= 100) {
//   document.write(
//     "Total Marks :" +
//       " " +
//       totalMarks +
//       "<br>" +
//       "Marks Obtained :" +
//       " " +
//       marksObtained +
//       "<br>" +
//       "Percentage :" +
//       " " +
//       percentage +
//       "<br>" +
//       "Grade : A+ " +
//       "<br>" +
//       "Remarks : Excellent"
//   );
// } else if (percentage >= 70 && percentage <= 80) {
//   document.write(
//     "Total Marks :" +
//       " " +
//       totalMarks +
//       "<br>" +
//       "Marks Obtained :" +
//       " " +
//       marksObtained +
//       "<br>" +
//       "Percentage :" +
//       " " +
//       percentage +
//       "<br>" +
//       "Grade : A " +
//       "<br>" +
//       "Remarks : Good"
//   );
// } else if (percentage >= 60 && percentage <= 70) {
//   document.write(
//     "Total Marks :" +
//       " " +
//       totalMarks +
//       "<br>" +
//       "Marks Obtained :" +
//       " " +
//       marksObtained +
//       "<br>" +
//       "Percentage :" +
//       " " +
//       percentage +
//       "<br>" +
//       "Grade : B " +
//       "<br>" +
//       "Remarks : You need to improve"
//   );
// } else {
//   document.write(
//     "Total Marks :" +
//       " " +
//       totalMarks +
//       "<br>" +
//       "Marks Obtained :" +
//       " " +
//       marksObtained +
//       "<br>" +
//       "Percentage :" +
//       " " +
//       percentage +
//       "<br>" +
//       "Grade : FAIL " +
//       "<br>" +
//       "Remarks : Sorry"
//   );
// }

// q no 7

// var secretNumber = 9,
//   num = +prompt("Guess the secret Number :") , score = 0 ;

// if (num === 9) {
//     alert("Bingo! Correct Answer");
// }
// else if (num === secretNumber-1 || num === secretNumber+1){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong! Try Again")
// }

// q no 8

// var num = +prompt("Enter a Number :");

// if (num % 3 == 0){
//   alert("The number is divisible by 3 .");
// }
// else{
//   alert("The number is not divisible by 3 .");
// }

// q no 9

// var num = +prompt("Enter a Number :");

// if(num % 2 == 0){
//   alert("The number is Even .");
// }
// else{
//   alert("The number is Odd .");

// }

// q no 10

// var temperature = +prompt("Enter Temperature :");

// if (temperature >= 40){
//   alert("It is too hot outside");
// }

// else if (temperature >= 30 && temperature <= 40){
//   alert("The Weather today is Normal");
// }

// else if (temperature >= 20 && temperature <= 30){
//   alert("Today’s Weather is cool");
// }

// else if (temperature >= 10 && temperature <= 20){
//   alert("OMG! Today’s weather is so Cool");
// }

// q no 11

// var num1 = +prompt("Enter a Number"),
//   num2 = +prompt("Enter a Number"),
//   operation = prompt("Enter a operation ", "( + , - , * , / , % )"),
//   sum = num1 + num2,
//   sub = num1 - num2,
//   multiply = num1 * num2,
//   division = num1 / num2,
//   remainder = num1 % num2;

// if (operation === "+") {
//   alert(
//     "The Addition of" +
//       " " +
//       num1 +
//       " " +
//       "and" +
//       " " +
//       num2 +
//       " " +
//       "is :" +
//       " " +
//       sum
//   );
// } else if (operation === "-") {
//   alert(
//     "The Subtraction of" +
//       " " +
//       num1 +
//       " " +
//       "and" +
//       " " +
//       num2 +
//       " " +
//       "is :" +
//       " " +
//       sub
//   );
// } else if (operation === "*") {
//   alert(
//     "The Multiplication of" +
//       " " +
//       num1 +
//       " " +
//       "and" +
//       " " +
//       num2 +
//       " " +
//       "is :" +
//       " " +
//       multiply
//   );
// } else if (operation === "/") {
//   alert(
//     "The Division of" +
//       " " +
//       num1 +
//       " " +
//       "and" +
//       " " +
//       num2 +
//       " " +
//       "is :" +
//       " " +
//       division
//   );
// } else if (operation === "%") {
//   alert(
//     "The Remainder of" +
//       " " +
//       num1 +
//       " " +
//       "and" +
//       " " +
//       num2 +
//       " " +
//       "is :" +
//       " " +
//       remainder
//   );
// }

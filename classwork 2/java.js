// MATH EXPRESSIONS

// q no 1

// var a = +prompt("Enter a Number :");

// document.write("The value of a is :" + " " + a + "<br>");

// document.write("The value of ++a is :" + " " + ++a + "<br>");

// document.write("Now the value of a is :" + " " + a + "<br>");

// document.write("The value of a++ is :" + " " + a++ + "<br>");

// document.write("Now the value of a is :" + " " + a + "<br>");

// document.write("The value of --a is :" + " " + --a + "<br>");

// document.write("Now the value of a is :" + " " + a + "<br>");

// document.write("The value of a-- is :" + " " + a-- + "<br>");

// document.write("Now the value of a is :" + " " + a + "<br>");

// q no 2

// var a = 2,
//   b = 1,
//   result = --a - --b + ++b + b--;

// document.write(
//   "a is :" +
//     " " +
//     a +
//     "<br>" +
//     "b is :" +
//     " " +
//     b +
//     "<br>" +
//     "result is :" +
//     " " +
//     result
// );

// --a;
// 1
// --a - --b;
// 1   -  0
//     0
// --a - --b + ++b;
// 1   -  0  +  1
//        2
// --a - --b + ++b + b--;
// 1  -   0  +  1  +  1
//           3
// resul is 3

// q no 3

// var name = prompt("Enter your Full Name :");

// alert("WELCOME!" + " " + name + "\n" + "Hope you are fine" );

// q no 4

// var num = +prompt("Enter a Number :");

// if (num === 0){
//     num = 5;
// }

// for( i = 1 ; i <= 10 ; i++ ){
//     document.write(num + " " + "*" + " " + i + " " + "=" + " " +  i*num + "<br>");
// }

// q no 5

var subject1 = prompt("Enter your first Subject :"),
  obtainedMarks1 = +prompt("Enter your Obtained Marks of First Subject :"),
  subject2 = prompt("Enter your second Subject :"),
  obtainedMarks2 = +prompt("Enter your Obtained Marks of Second Subject :"),
  subject3 = prompt("Enter your third Subject :"),
  obtainedMarks3 = +prompt("Enter your Obtained Marks of Third Subject :"),
  totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3,
  totalMarks = 100,
  percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table width = 50% >");
document.write(
  "<tr><td>SUBJECT</td><td>TOTAL MARKS</td><td>OBTAINED MARKS</td><td>PERCENTAGE</td></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks1 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks2 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks3 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    "</td><td>" +
    totalMarks * 3 +
    "</td><td>" +
    totalObtainedMarks +
    "</td><td>" +
    percentage +
    "%" +
    "</td></tr>"
);
document.write("</table>");

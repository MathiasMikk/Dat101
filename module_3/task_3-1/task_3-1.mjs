"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
  if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school"); 
} else {
  printOut ("I must take the car to school")  
}
printOut(newLine);
printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 10
  if (number<9) {
  printOut("positive")
} else if (number>9) {
  printOut("false")
} else {
  printOut("zero")
}
printOut(newLine)
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imagesize = Math.floor(Math.random()*8)+1;
  printOut("image size" + imagesize + "MP")
const minimumsize=4
if (imagesize>minimumsize){
  printOut("Thank you!")
}else {
  printOut("image is to small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("image size" + imagesize + "MP")
const maximumsize=6
if (imagesize>=minimumsize && imagesize<=maximumsize){
  printOut("Thank you!")
}else if (imagesize<minimumsize) {
  printOut("image is to small");
}else if (imagesize>=maximumsize) {
  printOut("image is to big")
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut(monthName)
if (monthName.includes("r")) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = Math.floor(Math.random() * noOfMonth);
const days = daysInMonth[monthIndex];

printOut(`Month: ${monthName}`);
printOut(`Days: ${days}`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "March" || monthName === "Mai") {
  printOut("Gallery Status: Closed for refurbishment.");
} else if (monthName === "April") {
  printOut("Gallery Status: Open in temporary premises.");
} else {
  printOut("Gallery Status: Open as usual.");
}

if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

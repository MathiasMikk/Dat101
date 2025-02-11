"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine)
document.getElementById("txtOut").innerText += new Date().toLocaleDateString("no-NB", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
});

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine)
function hentDagensDato() {
    return new Date();
}
function dagerTil2XKO() {
    const lanseringsdato = new Date(2025, 4, 14); 
    const idag = hentDagensDato();
    const forskjell = lanseringsdato - idag;
    return Math.ceil(forskjell / (1000 * 60 * 60 * 24));
}

const norskDato = hentDagensDato().toLocaleDateString("no-NB", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
});

const melding = `${norskDato} - Kun ${dagerTil2XKO()} dager til 2XKO lanseres!`;

document.getElementById("txtOut").innerText += melding;
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine)
function sirkelInfo(radius) {
    const diameter = radius * 2;
    const omkrets = 2 * Math.PI * radius;
    const areal = Math.PI * radius * radius;

    document.getElementById("txtOut").innerText += 
        `Diameter: ${diameter}, Omkrets: ${omkrets.toFixed(2)}, Areal: ${areal.toFixed(2)}`;
}

sirkelInfo(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine)
function rektangelInfo(bredde, hoyde) {
    const omkrets = 2 * (bredde + hoyde);
    const areal = bredde * hoyde;
    document.getElementById("txtOut").innerText += `Omkrets: ${omkrets}, Areal: ${areal}`;
}

rektangelInfo(5, 10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETemperaturType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}
function convertTemperatur(aTemperature, aType) {
    let Fahrenheit=0;
    let Celsius=0;
    let Kelvin=0;
    switch(aType) {
        case ETemperaturType.Celsius:
            printOut("Convert from Celsius") 
            Celsius = aTemperature
            Fahrenheit = (Celsius * 9/5) + 32;
            Kelvin = Celsius - 273.15;
            break; 
        case ETemperaturType.Fahrenheit:
            printOut("Convert from Fahrenheit")
            Fahrenheit = aTemperature;
            Celsius = (Fahrenheit - 32) * 5/9;
            Kelvin = Celsius + 273.15;
            break;
        case ETemperaturType.Kelvin:
            printOut("Convert from Kelvin")
            Kelvin = aTemperature;
            Celsius = Kelvin - 273.15;
            Fahrenheit = (Celsius * 9/5) + 32;
            break;
        }
    printOut("Celsius = " + Celsius.toFixed(0))
    printOut("Fahrenheit = " + Fahrenheit.toFixed(0))
    printOut("Kelvin = " + Kelvin.toFixed(0)) 
 }

convertTemperatur(47, ETemperaturType.Celsius);
printOut(newLine);
convertTemperatur(100, ETemperaturType.Fahrenheit);
printOut(newLine);
convertTemperatur(300, ETemperaturType.Kelvin);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function CalculateNetPrice(aPrice, aTaxGroup){
    let net = 0;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;

    printOut("taxGroup = " + taxGroup);

    switch(taxGroup){
        case "NORMAL":
            vat = 25;
            break;
            case "FOOD":
            vat = 15;
            break;
        case "HOTEL":
        case "TRANSPORT":
        case "CINEMA":
            vat = 10;
            break;
    default:
            printOut("Unknown VAT group!");
            return NaN;
    }

    if(!Number.isNaN(vat)){
        net = (100 * aPrice) / (vat + 100)
    } 
         return net;

   
}

const netPrice1 = CalculateNetPrice(100, "normal")
if (Number.isNaN(netPrice1)){
    printOut("unknown VAT group!");
}else {
printOut ("netPrice1 = " + netPrice1.toFixed(2));
}

const netPrice2 = CalculateNetPrice(100, "goblins");
if (Number.isNaN(netPrice2)) {
    printOut("Unknown VAT group!");
}else{
printOut("netPrice2 =" + netPrice2.toFixed(2));
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun(){
    let op = 1
    let line = 1;

    let ok = false
    do{
    let sumLeft = 0;
    for(let left = 0; left < line + 1; left++){
        sumLeft += op;
        op++;
}

let sumRight = 0;
for(let right = 0; right < line; right++){
    sumRight += op;
    op++;
}

if(sumLeft !== sumRight){
    ok = false;
    printOut("Error in line" + line.toString());
}else{
    ok = true;
}
line++;

if(line > 200){
    printOut("Math is fun!");
    break;
    }

}while (!ok);
}

testIfMathIsFun();
printOut(" ");

const countTo = 10;
function count(aNumber) {
  if (aNumber <= countTo) {
    printOut(aNumber.toString());
    count(aNumber + 1);
    printOut(aNumber.toString());
  }
}

count(1);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

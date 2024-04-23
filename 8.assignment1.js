/*BMI = mass / height ** 2 = mass / (height * height) 
(mass in kg   and height in meter).*/
/*
var marksmass = float(int());
var marksheight = int(int());
var johnsmass = float(int());
var johnsheight = int(int());

marksBMI= marksmass / (marksheight) ** 2;
johnsBMI= johnsmass / (johnsheight) ** 2;

console.log ('Marks BMI is', marksBMI);
console.log ('Johns BMI is ', johnsBMI);

if (marksBMI > johnsBMI) {
    console.log ('Marks is fat');
}
else {
    console.log ('John is fat')
}
*/

// ASSIGMENT 3 SUBIDO A GITHUB
var dolphingrade1 = parseInt(prompt("Ingrese calificacion 1 de  Dolphins:"));
var dolphingrade2 = parseInt(prompt("Ingrese calificacion 2 de  Dolphins:"));
var dolphingrade3 = parseInt(prompt("Ingrese calificacion 3 de  Dolphins:"));
var koalasgrade1 = parseInt(prompt("Ingrese calificacion 1 de  Koalas:"));
var koalasgrade2 = parseInt(prompt("Ingrese calificacion 2 de  Koalas:"));
var koalasgrade3 = parseInt(prompt("Ingrese calificacion 3 de  Koalas:"));

var averageDolphins= ((dolphingrade1+dolphingrade2+dolphingrade3)/3)
var averageKoalas=((koalasgrade1+koalasgrade2+koalasgrade3)/3);
var dolphinsWinner;
var koalasWinner;

if(averageDolphins>averageKoalas) {
    if (averageDolphins>100) {
        //dolphinsWinner=averageDolphins>averageKoalas;
        console.log("Dolphins killed to the Koalas.");
    } else{
        dolphinsWinner=averageDolphins>averageKoalas;
        console.log (`Does the Dolphins team win ? ${dolphinsWinner}`)
    }
}
else if (averageKoalas>averageDolphins) {
    if (averageKoalas>100) {
        console.log("Koalas killed to the Dolphins.");
     }else{
        koalasWinner=averageKoalas>averageDolphins;
        console.log (`Does the Koalas team win? ${koalasWinner}`)
     }
}
else {
    console.log ("Both teams are DRAAW")
}

// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCase = animal.toUpperCase();
var mottoSlonie = text.replace('Papugi', animal);
var polowaDlugosciMotto = mottoSlonie.length / 2;
var polowaMotto = mottoSlonie.slice(0, polowaDlugosciMotto);

document.getElementById("mottoPapuga").innerHTML = text;
document.getElementById("zieloneSlonie").innerHTML = animalUpperCase;
document.getElementById("mottoSlonie").innerHTML = mottoSlonie;
document.getElementById("polowaMotto").innerHTML = polowaMotto;


console.log(polowaDlugosciMotto);

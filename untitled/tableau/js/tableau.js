



var mousq = ["Athos", "Porthos", "Aramis"];

for (i = 0 ; i < mousq.length; i++ ) {
    console.log(mousq[i]);

}

mousq.push("D artagnan");


mousq.forEach(function(mousqs) {
    console.log(mousqs);
});




var valeurs = [11, 3, 7, 2, 9, 10];

var somme = 0;
for (var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
}
console.log(somme);



var max = valeurs[0];

for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
}
console.log( max);



// mot

var liste = [];
var mot = '';

while (mot !== "stop") {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        liste.push(mot);
    }
}

liste.forEach(function (mot) {
    console.log(mot);
});
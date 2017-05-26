



/*
 Activité : jeu de devinette
 */

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO


function pluriel(nombre,mot){
    // console.log('nombre : ' +nombre + 'mot ' + mot);
    if(nombre > 1){
        mot += "s";
    }
    return mot;
}

console.log("Bienvenue dans ce jeu de devinette !");


// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

console.log("Le nombre à deviner est situé entre 1 et 100, vous avez 6 tentatives. ");


var tentative = 6;
var nombre = prompt("Veuillez renseigner un nombre entre 1 et 100");

if  (nombre > 100 || nombre < 1) {
    nombre = prompt("Veuillez renseigner un nombre ENTRE 1 ET 100");
}

var endNumber = 0;
while ( nombre != solution && tentative > 0 ) {
    tentative--;
    if (nombre > solution) {
        console.log(+nombre + " est trop grand ! Il vous reste " + tentative + " " + pluriel(tentative,"tentative") + " !");
        nombre = prompt("Veuillez renseigner un nombre moins grand");
    }
    if (nombre < solution) {
        console.log(+nombre + " est trop petit ! Il vous reste " + tentative + " " + pluriel(tentative,"tentative") + " !");
        nombre = prompt("Veuillez renseigner un nombre plus grand");
    }
}
tentative--;
 if  ( nombre == solution && tentative >= 0) {
    console.log("Bravo ! Vous avez gagné, la solution etait bien " +solution+ " il vous restait " + tentative + " " + pluriel(tentative,"tentative") + " !");
}
else  {
    console.log("Vous avez perdu, la solution était " + solution);
}


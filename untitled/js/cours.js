


var prenom = prompt("veuillez renseigner votre prenom");
var nom = prompt("veuillez renseigner votre nom");

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

console.log(direBonjour(prenom, nom));
console.log(direBonjour("Sophie"));



// Renvoie le carré d'un nombre
function carre(x) {
    var x = x*x;
    return x;
    // TODO : compléter le code de la fonction
}

for (var i= 1; i < 11; i++) {

console.log(carre(i));
}



// TODO : écrire la fonction min()

function mini(x, y) {
    return (x > y) ? y : x;
}

console.log(mini(4.5, 5)); // Doit afficher 4.5
console.log(mini(19, 9)); // Doit afficher 9
console.log(mini(1, 1)); // Doit afficher 1



// TODO : écrire la fonction calculer()

function calculer(x,  operation, y) {
    var resultat;
    if (operation = "+") {
        resultat = x + y;
    }
    if (operation = "-") {
        resultat = x - y;
    }
    if (operation = "*") {
        resultat = x * y;
    }
    if (operation = "/") {
        resultat = x / y;
    }

    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10





function perim(x) {

    x= 2 * Math.PI * x;

    return x;

}


console.log(perim(3));



function aire(x) {

    x=  Math.PI * (x*x);

    return x;

}

console.log(aire(4));














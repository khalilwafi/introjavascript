




for (let nombre = 1; nombre <= 5; nombre++) {
    console.log("C'est le tour numero  " + nombre );

}

let number = 1;

while ( number < 10) {

    number++;
    console.log("c'est le tour numero " + number);

}

// nouvel algo

let nombro = prompt("Veuillez saisir un nombre entre 50 et 100 ");
let nombreOK = false;

while (nombreOK == false) {

    if (nombro >= 50 && nombro <= 100) {
        nombreOK = true;
        console.log("Vous avez saisi le nombre " + nombro);
    }

    else {
        nombro = prompt("Veuillez saisir un nombre entre 50 et 100 svp");
    }

}


// algo multiplicator

let nb = prompt("Veuillez saisir un nombre");

let finalcalcul = 0;

for ( let nbmulti = 0; nbmulti <=10; nbmulti++ ) {

    finalcalcul = nb * nbmulti;

    console.log( + nb + " x " + nbmulti + " = " + finalcalcul );

}



// ni oui ni non

let saisie = prompt(" Ni oui ni non ! Ecrivez nimporte quoi");

saisieOK = false;

while ( saisieOK == false) {

    if ( saisie === "oui" || saisie === "non" ) {

        saisie = prompt("Vous avez perdu ! Voulez vous ressayer ?");

        if (saisie === "oui" || saisie == "non" ) {
            alert("Vous avez encore perdu ! Fin du jeu !");
            saisieOK = true;
        }
    }

    else {
        alert("Bravo vous avez gagné ! Fin du jeu !");
        saisieOK = true;
    }
}


// triangleConstructor

let triangle = '';



for ( let ligne = 0 ; ligne< 8 ; ligne++) {

triangle += "#";

    console.log(triangle );

}




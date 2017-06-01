


function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') ||
            (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}


function inverser(mot) {
    var motInverse = "";


    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }


    return motInverse;
}




var mot = prompt(" entrez un mot");


console.log("Le mot " +mot+ " contient " +mot.length+" caractère(s)");
console.log("Il s'écrit en minuscule "+ mot.toLowerCase());
console.log("Il s'écrit en majuscule " +mot.toUpperCase());
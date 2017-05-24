/*Pour calculer le montant de la TVA, il suffit de diviser le prix HT par 100 puis de le multiplier :
    par 20 pour une TVA à 20 % */


var a=  prompt("Veuillez renseigner le prix HT :");
var b = 19.6; // Taux TVA


var c = (a / 100) * b;

console.log("Le prix TTC est de " + c + "euro");

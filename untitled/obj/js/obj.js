

var chien = {
    nom : "Crockdur",
    race : " mâtin",
    taille : "75",

aboie: function() {

        var ilaboie = "Grr ! Grr !";
        return ilaboie;


}



}

// TODO : ajoutez ici la définition de l'objet chien

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboie());




var cercle = {

    rayon : "0",


    aire: function () {

        var airette = (this.rayon * this.rayon) * 3.14;
        return airette;
    },


    perimetre: function () {

        var peri = this.rayon * 3.14 * 2;
        return peri ;
    }
}

 cercle.rayon = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());







var compte = {
    titulaire: "Alex",
    solde: 0,

    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());







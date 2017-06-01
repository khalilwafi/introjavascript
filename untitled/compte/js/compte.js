




var compteBancaire = {

    initCB : function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;

    },


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

var compteEpargne = Object.create(compteBancaire);

compteEpargne.initCE = function (titulaire, solde, taux) {
    this.initCB(titulaire,solde);
    this.taux = taux;

},

compteEpargne.ajouterInterets = function () {
    var interets = this.solde * this.taux;
    this.solde += interets;
}



// TODO : ajoutez ici la définition des objets nécessaires

var compte1 = Object.create(compteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(compteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
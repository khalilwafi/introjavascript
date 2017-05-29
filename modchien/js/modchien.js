



var chien = {



    initChien: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;


    },

    aboie: function() {

        var ilaboie = "Grr ! Grr !";
        return ilaboie;


    },

    aboieAutre: function() {

        var elleaboie = "Kali ! Kali !";
        return elleaboie;


    },

    description : function () {
        var decrit = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm."
        return decrit;

    }

}


var chien1 = Object.create(chien);

chien1.initChien("Crokdur", "mâtin", 75);





var chien2 = Object.create(chien);

chien2.initChien("Pupuce", "bichon", 22);





// TODO : ajoutez ici la définition de l'objet chien

console.log(chien1.description());
console.log("Tiens, un chat ! " + chien1.nom + " aboie : " + chien1.aboie());

console.log(chien2.description());
console.log("Tiens, un chat ! " + chien2.nom + " aboie : " + chien2.aboieAutre());






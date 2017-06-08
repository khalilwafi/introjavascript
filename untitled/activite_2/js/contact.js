


var contact = {


    initContact : function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;

    },

    decrire : function () {

        var retour = console.log("Nom : " +this.nom + " Prenom : " +this.prenom);
        return retour;

    }

}






console.log("Bienvenue dans le Gestionnaire de contact");
console.log("1- Lister les contacts");
console.log("2- Ajouter un contact");
console.log("3- Quitter");


var contact1 = Object.create(contact);
contact1.initContact("Carole","Levisse");
var contact2 = Object.create(contact);
contact2.initContact("Melodie", "Nelsonne");

var tbContact = [];
tbContact.push(contact1);
tbContact.push(contact2);


var nomm = "";
var prenomm ="";

while (choix != 3) {


    var choix = prompt("1- Liste des contacts   2-Ajouter un contact   3-Quitter");

    if (choix == 1) {
        console.log("Voici la liste des contacts");

        tbContact.forEach(function (contact) {
            console.log(contact.decrire());
        });


    }

    if (choix == 2) {

        nomm = prompt("Veuillez renseigner un nom");
        prenomm = prompt("Veuillez renseigner un prenom");

        var contact3 = Object.create(contact);
        contact3.initContact(nomm, prenomm);

        alert("Vous venez d'ajouter : " + nomm + " " + prenomm);

        tbContact.push(contact3);


    }

    if (choix == 3) {

        alert("Merci et à bientôt !");

    }


}


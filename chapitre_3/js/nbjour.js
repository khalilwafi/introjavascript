

var mois = prompt ("veuillez selectionner un mois");

if ((mois === "avril") || (mois === "novembre" ) || (mois === "juin" ) || (mois === "septembre" )) {

    console.log("Il y a 30 jours dans ce mois ");
}

if ((mois === "fevrier")) {
    console.log("il y a 28 jours en fevrier");
}

else {
    console.log("il y a 31 jours dans ce mois");
}
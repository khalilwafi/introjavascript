
function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return String(n) === str && n >= 0;
}


var heure = '';
var minute = '';
var seconde = '';
var heureOK = false;




while (heureOK == false) {


    heure = prompt("veuillez renseigner une heure");

    if(isNormalInteger(heure) && heure < 24 )  {
        heureOK = true;
    }

    if(isNormalInteger(heure) && heure == 24 )  {
        heure = 0;
        heureOK = true;
    }

    //alert("heure" + heure);
}

heureOK = false ;

while (heureOK == false) {
    minute = (prompt("veuillez renseigner les minutes"));

    if(isNormalInteger(minute) && minute < 60 )  {
        heureOK = true;
    }

    if(isNormalInteger(minute) && minute == 60 || minute == 59 )  {
        heure++;
        minute = 0;
        heureOK = true;
    }
}

heureOK = false;

while (heureOK == false) {

    seconde = (prompt("veuillez renseigner les secondes"));

    if(isNormalInteger(seconde) && seconde < 60 )  {
        heureOK = true;
    }
    if(isNormalInteger(seconde) && seconde == 60 || seconde == 59 )  {
        minute++;
        seconde = 0;
        heureOK = true;
    }

}


seconde++;

console.log("L'heure a le seconde suivante est " + heure + " " + minute + " " + seconde);
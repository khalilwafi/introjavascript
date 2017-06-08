
function twoOldestAges(ages){

    // Valeurs des tableaux
    var TwoMax = [];
    var a = 0;
    var b = 0;

    // Valeurs des for
    var i =0;
    var j =0;



    // Valeur la 2eme plus grande

    for ( j = 0; j < ages.length; j++){

        if (ages[j] > a && ages[j] < b){
            a = ages[j];
        }

    // Valeur la plus grande

    for ( i = 0; i < ages.length; i++){

        if (ages[i] > b){
            b = ages[i];
        }


        }
    }

    TwoMax.push(a, b);
    return TwoMax;
}




console.log(twoOldestAges([10, 20, 30, 55, 21 , 72, 42]))







/* var str = this;
 var change = str.split(' ');
 var maj;
 var total =[];
 var rest;

 for (var i=0; i < change.length; i++) {
 maj = change[i][0].toUpperCase();
 rest = change[i].substring(1)
 total.push(maj+rest);
 }

 return total.join(' ');*/




String.prototype.toJadenCase = function () {

    var str = "How can mirrors be real";

    var change = str.split(' ');
    var i =0;
    var maj = [];
    var z = i[0];
//console.log(change);

//console.log(change[0][0]);

    for (i=0; i < change.length; i++) {
        maj= change[i][0].toUpperCase();
        console.log(maj);


        var rest = change[i].substring(1); //aleur qui prend tt en compte sauf la premiere lettre]
//console.log(rest);
    }


    var total = maj+rest;
    console.log(total);



};


























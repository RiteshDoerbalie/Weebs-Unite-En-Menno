function showEvenOfOneven(){
    alert(asdf);
    let antwoordEvenOfOneven = evenOfOnevenBerekening();
    document.getElementById("antwoordEvenOfOneven").innerHTML = antwoordEvenOfOneven;
}

function evenOfOnevenBerekening(){
    let evenOfOnevenvalue = document.getElementById("EvenOfOneven").value;
    let evenOfOneven = even % 10;
    let evenNummers = [0,2,4,6,8];
    let even = "dit getal is even";
    let oneven = "dit getal is oneven";
    if(evenOfOneven == evenNummers){
        return even;
    } else {
        return oneven;
    }
}

document.getElementById("antwoordEvenOfOnevenButton").addEventListener("click",showEvenOfOneven);

function showRestwaarden(){
    let deeltalWaarden = parseInt(document.getElementById("RestwaardenDeeltal").value);
    let delerWaarden = parseInt(document.getElementById("RestwaardenDeler").value);
    let restwaardenAntwoord = MathMate.restwaardenUitrekenen(deeltalWaarden,delerWaarden);
    document.getElementById("antwoordRestwaarden").innerHTML = restwaardenAntwoord;
}

document.getElementById("antwoordRestwaardenButton").addEventListener("click",showRestwaarden);
// De gebruiker kan 2 getallen invoeren, het basis getalen het getal wat er iedere keer van af gehaald wordt, en als hij op de knop “Rest” klikt, dan moet derestwaardehiervan getoond worden.

//Optellen
function showOptellen(){
    let term1 = parseInt(document.getElementById("Optellen").value);
    let term2 = parseInt(document.getElementById("Optellen2").value);
    let somAntwoord = MathMate.optellenUitrekenen(term1, term2);
    document.getElementById("antwoordOptellen").innerHTML = somAntwoord;
}
document.getElementById("antwoordOptellenButton").addEventListener("click", showOptellen);

document.getElementById("antwoordRestwaardenButton").addEventListener("click",showRestwaarden);
// De gebruiker kan 2 getallen invoeren, het basis getalen het getal wat er iedere keer van af gehaald wordt, en als hij op de knop “Rest” klikt, dan moet derestwaardehiervan getoond worden.




//machtsverheffen berekeningen
function showMachtsverheffen(){
    let grondtal = document.getElementById("grondtal").value;
    let exponent = document.getElementById("exponent").value;
    let antwoordMachtsverheffen = MathMate.machtsverheffenUitrekenen(grondtal,exponent);
    document.getElementById("antwoordMachtverheffen").innerHTML = antwoordMachtsverheffen;
}



document.getElementById("antwoordMachtverheffenButton").addEventListener("click",showMachtsverheffen);
//Aftrekken
function showAftrekken(){
    let aftrekker1 = parseInt(document.getElementById("Aftrekken").value);
    let aftrekker2 = parseInt(document.getElementById("Aftrekken2").value);
    let aftrekkerAntwoord = MathMate.aftrekkenUitreken(aftrekker1, aftrekker2);
    document.getElementById("antwoordAftrekken").innerHTML = aftrekkerAntwoord;
}
document.getElementById("antwoordAftrekkenButton").addEventListener("click", showAftrekken);

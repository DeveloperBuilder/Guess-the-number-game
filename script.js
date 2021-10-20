let naam;
let gok;

while (naam === undefined || naam === null || naam.length === 0) { 
  naam = prompt('Welkom! Wat is je naam?');
}

alert("Hey " + naam);

randomNum=Math.floor(Math.random() * 26); 

gok= parseInt(prompt('Voer een nummer in van 0 tot 25?')); 

while (isNaN(gok)) {
   gok = parseInt(
     prompt(
       "Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"
     )
   );
 }

if (gok == randomNum){
   window.alert ('Gefeliciteerd je hebt gewonnen'); 
} else {
window.alert('Dat is niet correct');
};

console.log("Dag " + naam + " tot de volgende keer");



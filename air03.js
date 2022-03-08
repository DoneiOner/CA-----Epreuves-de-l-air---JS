/*                  CHERCHER L'INTRUS

Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/




// GESTION D'ERREURS
if ( process.argv.length <= 4 ) {
    affichageErreur (1);
}

for (let i = 2; i < process.argv.length; i++) {
    if (isNaN(process.argv[i])) {
        affichageErreur (2);
    }
    
}


// PARSING

let nombreOccurences = 1
let array = [];
for (let i = 2; i < process.argv.length; i++) {
    array.push(process.argv[i]);    
}


// FONCTIONS
function affichageErreur (n) {
    console.log("Erreur." + n);
    process.exit(0);
}


function my_function (array) {
    /* sansPaire = 0;*/
    for (let n = 0; n < array.length; n++) {
        //let nombreOccurences = 1;
        /*if ((n == array.length-1) && (sansPaire > 1)){
            affichageErreur(3);
        }*/
        for (let j = n+1; j < array.length; j++) {
            if (array[n] == array[j]) {
                                //console.log(sansPaire);
                //console.log("j = " +j);
                delete array[j];
                //console.log(" le tableau apres suppression j " + array);
                //console.log("n= " +n);
                delete array[n];
                //console.log("le tableau apres suppression n " + array); 
            }   
        }
    }

let ilYAUnIntrus = 0;

for (let index = 0; index < array.length; index++) {
    if (typeof array[index] !== 'undefined') {
        //console.log(array[index]);
        ilYAUnIntrus++;
        var numeroIndex = index;
    }
}

if (ilYAUnIntrus == 0) {
    console.log("Il n'y a pas d'intrus dans cette liste");
    process.exit(0);
}
if (ilYAUnIntrus > 1) {
    console.log("Il y a plus d'un intrus dans cette liste");
    process.exit(0);
}
if (ilYAUnIntrus == 1) {
    let intrus = array[numeroIndex];
    return intrus;
}


}






// RESOLUTION-AFFICHAGE
console.log("l'intrus est " + my_function(array));
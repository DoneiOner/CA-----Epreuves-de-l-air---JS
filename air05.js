/*               SUR CHACUN D'ENTRE EUX
Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.
Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7
$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15
L’opération à appliquer sera toujours le dernier élément.
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/




// GESTION D'ERREURS - PARSING :
function error() {
    console.log('Erreur2.');
    process.exit(0);
}

if (process.argv[4] == undefined) {
    error();
}
let element;
for (let index = 2; index < process.argv.length-1; index++) {
   element = process.argv[index]
    if (isNaN(element)) {
    error();
}
}

let dernierElement = process.argv[process.argv.length-1];
let operateur = dernierElement.substring(0, 1);
let nombreOperant = Number(dernierElement.slice(1));
console.log(operateur);

if (operateur != "+" && operateur != "-") {
    error();
}

if (isNaN(nombreOperant)) {
    error();
}


// PARSING
let array = [];
//console.log(process.argv);
for (let index = 2; index <= process.argv.length; index++) {
    let elementEnCours = process.argv[index];
    if (index != process.argv.length-1) {
    array.push(Number(elementEnCours));
    }
        //console.log(array);
        //console.log(dernierElement + '!');
        //console.log(typeof dernierElement);
};
//console.log(operateur);
//console.log(nombreOperant);
//console.log(typeof (nombreOperant));


// RESOLUTION - AFFICHAGE
for (let index = 0; index < array.length-1; index++) {
    process.stdout.write(eval(`${array[index]} ${operateur} ${nombreOperant} + " "`));
    
}
console.log('');
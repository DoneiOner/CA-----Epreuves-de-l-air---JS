/*                  UN SEUL A LA FOIS
Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.
Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// GESTION D'ERREURS :
if (process.argv.length > 3 || process.argv[2] == undefined) {
    console.log('Erreur.');
    process.exit(0);
}

// PARSING :
let chaine = process.argv[2];
let array = [];
//console.log(chaine[1]);

// RESOLUTION :
function notTwice (chaine) {
for (let index = 0; index < chaine.length; index++) {
    if (chaine[index] == chaine[index+1]) {
        continue;
    } 
    else {
        array.push(chaine[index]);
    }   
};
return array;
}
let result = notTwice(chaine).join('');
console.log(result);
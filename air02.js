/*                  CONCAT
Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. 
Espacés d’un séparateur donné en dernier argument au programme.
Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}
Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/



// PSEUDO CODE : 
// BOUCLER SUR LES ARGUMENTS, REMPLIR UN TABLEAU
//LET SEPARATEUR = DERNIER ARGUMENT
// BOUCLER SUR LE TABLEAU, PROCESS.STDOUT.WRITE(TABLEAU[INDEX] + SEPARATEUR)




// GESTION D'ERREURS
if (process.argv[2] == undefined || process.argv[3] == undefined) {
    console.log('Erreur.');
    process.exit(0);
}


// PARSING
let array = [];

for (let i = 2; i < process.argv.length-1; i++) {
	array.push(process.argv[i]);
}

let separator = process.argv[process.argv.length-1];
//console.log(array);
//console.log(separator);



// FONCTION
function joining(array, separator) {
	let trucs_a_afficher = array.join(separator);
	return trucs_a_afficher;		
	}



// RESOLUTION
console.log(joining(array, separator));
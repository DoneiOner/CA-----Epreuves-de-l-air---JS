/*                  SPLIT EN FONCTION
Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}
Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


// PSEUDO CODE :
// PRENDRE LA STRING ET LA DECOUPER AVEC LE DEUXIEME ARGUMENT FOURNI
// BOUCLER SUR LE TABLEAU ET CONSOLE.LOG


// GESTION D'ERREURS
if (process.argv.length > 4 || process.argv[2] == undefined )/*|| process.argv[3] == undefined)*/ {
    console.log('Erreur.');
    process.exit(0);
}
if(process.argv[3] == undefined){console.log('erreur2'); process.exit(0);}




// PARSING
let chaine = process.argv[2];
let separator = process.argv[3];
//console.log(chaine);
//console.log(separator);




// FONCTION
function decoupage(chaine, separator) {

   let array = chaine.split(separator);
    //console.log(array);

    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]}`);        
    }
}




// RESOLUTION/AFFICHAGE
decoupage(chaine, separator);
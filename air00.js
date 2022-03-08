/*                  SPLIT
Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).
Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}
Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/





// PSEUDO CODE :
// PRENDRE LA STRING ET LA DECOUPER AVEC ' ', TABULATIONS, RETOURS A LA LIGNE
// BOUCLER SUR LE TABLEAU ET CONSOLE.LOG




// GESTION D'ERREURS
if (process.argv.length > 3 || process.argv[2] == undefined) {
    console.log('Erreur.');
    process.exit(0);
}




// PARSING
let chaine = process.argv[2];
//console.log(chaine);

"a=b,c:d".split('=').join(',').split(':').join(',').split(',')


// FONCTION
function decoupage(chaine) {

   let array = chaine.split(" ").join(',').split("/t").join(',').split("/n").join(',').split(',');
    //console.log(array);

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);        
    }
}




// RESOLUTION/AFFICHAGE
decoupage(chaine);
/*                  ROTATION VERS LA GAUCHE
Créez un programme qui décale tous les éléments d’un tableau vers la gauche. 
Le premier élément devient le dernier à chaque rotation.
Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}
Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


// PSEUDO CODE
/*
je vais alimenter un tableau avec mes arguments
je vais prendre le premier element,
le push a la fin du tableau,
et effacer le premier element du tableau


*/
// gestion d'erreurs:
if (process.argv[2] == undefined || process.argv[3] == undefined) {
	console.log("erreur.");
	process.exit(0);

}



// parsing:
let tableau = [];
for (i=2; i<process.argv.length; i++) {
	tableau.push(process.argv[i])
}
//console.log(tableau);

// resolution:
tableau.push(tableau[0]);
tableau.splice(0, 1);
//console.log(tableau);

// affichage : 
for (i=0; i<tableau.length; i++) {
	process.stdout.write(`${tableau[i]} `);
}
console.log('');

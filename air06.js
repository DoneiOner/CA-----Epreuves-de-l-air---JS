/*                  CONTRÔLE DE PASS SANITAIRE
Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.
Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}
Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// pseudo-code :
// - mettre les arguments dans un tableau
// - let discriminant = dernier element du tableau
// - parcourir le tableau, pour chaque element verifier si la chaine "discriminant" est presente dans la chaine parcourue => element.includes(discriminant) (renvoie true ou false)
//          - si oui : continue
//          - si non : push dans le nouveau tableau
// - afficher le nouveau tableau

// GESTION D'ERREURS :
if (process.argv[3] === undefined) {
	console.log("Erreur.");
	process.exit(0);
}


// PARSING : 
let array = [];
for (let index = 2; index < process.argv.length; index++) {
	array.push(process.argv[index]);
	//console.log(array);	
};

let discriminant = array[array.length-1];
let discriminantCapitale = discriminant.toUpperCase();
//console.log(discriminant);

let array2 = [];

// RESOLUTION : 
function eraseDoublons (array, discriminant) {
for (let index = 0; index < array.length-1; index++) {
	if (!array[index].includes(discriminant) && !array[index].includes(discriminantCapitale)) {
		array2.push(array[index]);	
}
};
};
//console.log(array2);
eraseDoublons(array, discriminant);

// AFFICHAGE :
for (let index = 0; index < array2.length; index++) {
	process.stdout.write(`${array2[index]} `);
}
console.log('');
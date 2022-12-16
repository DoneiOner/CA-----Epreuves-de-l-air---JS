/*                  INSERTION DANS UN TABLEAU TRIÉ
Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. 
Le dernier argument est l’élément à ajouter.
Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}
Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4
$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// PSEUDO-CODE :
// - parsing : 	- nombreAAjouter (process.argv[process.argv.length-1)]
//				- array (une boucle for sur le process.argv, sauf le nombreAAjouter)
// - resolution : 
// 				- parcourir la liste triée
// 						- si array[index+1] > nombreAAjouter, inserer nombreAAjouter à la position index+1
//							( 		avec : array.splice(index+1, 0, nombreAAjouter)			)
// - affichage
// - tests
// - gestion d'erreurs


// GESTION D'ERREURS :
function error() {
	console.log("Erreur.");
	process.exit(0);
}
if (process.argv[4] == undefined) {
	error();
}
for (let index = 2; index < process.argv.length; index++) {
	if (isNaN(process.argv[index])) {
		error();
	};	
}

// PARSING : 
let nombreAAjouter = parseInt(process.argv[process.argv.length-1]);
let array = [];
for (let index = 2; index < process.argv.length-1; index++) {
	array.push(parseInt(process.argv[index]));	
};
//console.log(array);
//console.log(nombreAAjouter);

// NOUVELLE GESTION D'ERREUR : le user a t-il entré une liste non triée 
// ( on la met a cet endroit du code pour beneficier du parsing avec parseInt() sans redondance)
for (let index = 2; index < process.argv.length-2; index++) {
	if (process.argv[index] > process.argv[index+1]) {
		console.log("Dis moi pas que t'essayes de me la mettre !?!");
		process.exit(0);
	};	
}
// RESOLUTION : 
function sortedInsert (nombreAAjouter, array) {
	for (let index = 0; index < array.length; index++) {
	if (array[index] >= nombreAAjouter) {
		array.splice(index, 0, nombreAAjouter);
		//console.log("cas 1");
		return array;
	}
	else if (index == array.length-1) {
		array.push(nombreAAjouter);
		//console.log("cas 2");
		return array;
	}
};
}


// AFFICHAGE :
sortedInsert(nombreAAjouter, array);
for (let index = 0; index < array.length; index++) {
	process.stdout.write(array[index] + " ");	 
}
console.log('');
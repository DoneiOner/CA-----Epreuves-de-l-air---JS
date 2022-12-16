/*                  MÉLANGER DEUX TABLEAUX TRIÉS
Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, 
les deux listes seront séparées par un “fusion”.
Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}
Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// IDEE DE PSEUDO-CODE :
// - parsing:
//		- boucle pour parcourir les argv : si argv != "fusion", variable WhatArray = tableau 1, push dans tableau 1
//		- 									si argv == "fusion",  variable WhatArray = tableau2, push dans tableau 2

// - parcourir le tableau 2
//			- parcourir le tableau1
//					- si tableau2[i] <= tableau1[j] alors push tableau2[i] dans tableau 1 avec tableau1.splice(j, 0, tableau2[i]);
//														  et supprimer tableau2[i];
//			-continuer de parcourir le tableau1 jusqu'a ce que le tableau2 soit vide
// - afficher le contenu du tableau1



// gestion d'erreurs : 

	function error() {
		console.log("Erreur.");
		process.exit(0);
	}
	
	for (let index = 2; index < process.argv.length; index++) {
		if (isNaN(process.argv[index] && process.argv[index] != "fusion")) {
			error();
		};	
	}


// parsing : 
let newArray1 = [];
let newArray2 = [];
let tableau1 = [];
let tableau2 = [];
// on assigne les arguments à tableau1, ou tableau2 apres le "fusion"
let whatArray = tableau1;
for (let index = 2; index < process.argv.length; index++) {
	if (process.argv[index] == "fusion") {
		whatArray = tableau2 ;
		continue;
	}
	whatArray.push(process.argv[index]);	
}


// FONCTIONS

// ma fonction qui va pousser dans le tableau2 les elements de tableau1 
// quand ils rencontrent un element plus grand numeriquement
function FusionSortedArrays (tableau1, tableau2){
for (let i=0; i < tableau1.length; i++) {
	for (let j=0; j < tableau2.length; j++) {
		if (tableau2[j] >= tableau1[i]) {
			tableau2.splice(j, 0, tableau1[i]);
			break;
		}
	}
}
return tableau2;
}


// ma fonction qui retrie les elements de tableau2 (il y avait un dysfonctionnement):
function my_select_sort(newArray1) {
	
	let min = parseInt(newArray1[0]);
	
	for (let k = 0; k < newArray1.length; k++) {		
		if (parseInt(newArray1[k]) <= min) {
			min = parseInt(newArray1[k]);					
			indexToErase = k;
		}
	}
	newArray2.push(min);														
	newArray1.splice(indexToErase, 1);
}



//RESOLUTION
newArray1 = FusionSortedArrays(tableau1, tableau2);
//console.log(newArray1 + "newarray1");
//console.log(newArray2 + "newarray2");

while (newArray1.length !=0) {
	my_select_sort(newArray1);
}

//console.log(newArray1+"newArray1");
//console.log(newArray2+"newArray2");



// AFFICHAGE
for (i=0; i < newArray2.length; i++) {
	process.stdout.write(newArray2[i] + " ")
}
console.log('');



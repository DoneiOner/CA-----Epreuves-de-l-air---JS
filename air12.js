/*                  LE ROI DES TRIS
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).
Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}
Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6
Afficher error et quitter le programme en cas de problèmes d’arguments.
Wikipedia vous présentera une belle description de cet algorithme de tri.
*/

// GESTION D'ERREURS : 
function Error() {
    console.log('Erreur.');
    process.exit(0);
}

if (process.argv[2] == undefined || process.argv[3] == undefined) {
	 Error()
	};

for (i=2; i>process.argv.length; i++) {
	if (isNaN(process.argv[i])) {
		Error();
	};
};

// le tableau est une variable globale
var items = [];
for (i=2; i<process.argv.length; i++) {
	items.push(process.argv[i]);
}
//console.log(items);
let newArray2 = [];

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
		//console.log(pivot);
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
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

// first call to quick sort
var newArray1 = quickSort(items, 0, items.length - 1);
//console.log(sortedArray);

while (newArray1.length !=0) {
	my_select_sort(newArray1);
}


//RESOLUTION

//console.log(newArray1 + "newarray1");
//console.log(newArray2 + "newarray2");

while (newArray1.length !=0) {
	my_select_sort(newArray1);
}

// AFFICHAGE :
//console.log(newArray2);
for (i=0; i<newArray2.length; i++) {
	process.stdout.write(newArray2[i] + " ");
}
//console.log(sortedArray);

console.log('');
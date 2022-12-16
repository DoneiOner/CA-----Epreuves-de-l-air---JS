/*                  AFFICHER LE CONTENU
Créez un programme qui affiche le contenu d’un fichier donné en argument.
Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia
Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.
*/



// gestion d'erreurs :
function Error() {
    console.log("erreur.");
    process.exit(0);
}

if (process.argv[2] == undefined || process.argv[3] != undefined) {
    Error();
}
let tableau = process.argv[2].split ('.');
//console.log(tableau);
if (tableau[1] != "txt") {
    Error();
}


// Parsing : 
let nomFichier = process.argv[2];
const fs = require('fs'); 


// gestion d'erreur: si le fichier est inaccessible : 
//  si le resultat du fs.readFile est "undefined", logguer "fichier inaccessible"


//console.log(`${nomFichier}`);

// Résolution - Affichage :

fs.readFile(`${nomFichier}`, 'utf8', function(err, data) { const content = data;  
    if(content == undefined) {console.log('fichier inaccessible')}
    else {console.log(content); }
});


/*                  AFFICHER UNE PYRAMIDE
Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.
Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//const { AssertionError } = require("assert");

/*pseudo code:

nombre d'espaces tout en haut == arg-1       J
nombre d'espaces 2eme ligne == arg-2
 ""      ""      3eme ligne == argv-3
nombre de zeros tout en bas == argv *2 -1    K
"          "    tout en haut == 1
""       ""     2eme ligne == 1+2
"          "    3eme ligne == 3+2

 -boucler (i=1;for(i<argv); i++){ //le nombre de lignes
    for(j=argv-i j<argv; j++){process.stdout.write (" ")} //impression des espaces
    for(k=1; k<(argv*2-1)); k+2) 'process.stdout.write "0"

*/
function Error() {
    console.log('Erreur.');
    process.exit(0);
}
if (process.argv[2] == undefined || process.argv[3] == undefined) { Error()};
var reg = new RegExp('^[0-9]$');
if (!reg.test) {Error();};
let argv = parseInt(process.argv[3]);
if (isNaN(argv)){ Error();}

//console.log(argv);
let space= " ";
let caractere = process.argv[2];
console.log('');
    for (j=argv, k=1; j>0 && k<=argv*2-1; j--, k+=2) { 
        process.stdout.write( `${space.repeat(j)}` );
             process.stdout.write( `${caractere.repeat(k)}` )
             console.log('');;
            };
        console.log('');
    //}

         
/*                  META EXERCICE
Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent 
(sauf celui là). Créez au moins un test pour chaque exercice.
Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)
Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
*/
const arrayScriptsAndArgs = [
  ['air00.js', [['\"Bonjour les gars\"']], '"Bonjour\nles\ngars"\n'],
  ['air01.js', [["Crevette magique dans la mer des étoiles"], ["la"]], "Crevette magique dans \n mer des étoiles\n"],
  ['air02.js', [['je'], ['teste'], ['des'], ['trucs'], [' ']], 'je teste des trucs\n'],
  ['air03.js', [['1'], ['2'], ['3'], ['4'], ['5'], ['4'], ['3'], ['2'], ['1']], "l'intrus est 5\n"],
  ['air04.js', [['Hello milady,   bien ou quoi ??']], 'Helo milady, bien ou quoi ?\n'],
  ['air05.js', [['1'], ['2'], ['3'], ['4'], ['5'], ['+2']], "3 4 5 6 7 \n"],
  ['air06.js', [['Michel'], ['Albert'], ['Thérèse'], ['Benoit'], ['t']], "Michel \n"],
  ['air07.js', [['1'], ['3'], ['4'], ['2']], "1 2 3 4 \n"],
  ['air08.js', [['10'], ['20'], ['30'], ['fusion'], ['15'], ['25'], ['35']], "10 15 20 25 30 35 \n"],
  ['air09.js', [['"Michel"'], ['"Albert"'], ['"Thérèse"'], ['"Benoit"']], `"Albert" "Thérèse" "Benoit" "Michel" \n`],
  ['air10.js', [['test10.txt']], "je danse le mia\n"],
  ['air11.js', [['0'], ['5']], "\n     0\n    000\n   00000\n  0000000\n 000000000\n\n"],
  ['air12.js', [['1'], ['3'], ['5'], ['2'], ['4'], ['6']], "1 2 3 4 5 6 \n"]
];
const fractionVerif = [
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
  '1/1',
]

const SpawnSynchrone = require('child_process').spawnSync;
let nbreSucces = 0;
// test pour exo air00.js : 

//console.log(myResult);
//console.log(typeof myResult);

let nbreTests = 0;

function Test(fichier, arguments) {
  //success = false;
  let myResult = SpawnSynchrone('node', [fichier, ...arguments]).stdout.toString(); 
  //console.log("Fichier => " + fichier ,"Arguments =>" + arguments , 
   //           "myResult =>" + myResult, "typeOf(myResult) =>" + typeof(myResult));

return myResult;
}

for (let i=0; i < arrayScriptsAndArgs.length; i++) {
    let fichier = arrayScriptsAndArgs[i][0];
    let arguments = arrayScriptsAndArgs[i][1];
     
    let result = arrayScriptsAndArgs[i][2];
    //console.log("résultat attendu =>" + result + "typeof résultat attendu : " + typeof(result));
     nbreTests++
    if (Test(fichier, arguments) == result) {
      nbreSucces ++;
      console.log(`\x1b[32m${fichier} ${fractionVerif[i]} : success`);
      } else {
      console.log(`\x1b[31m${fichier} ${fractionVerif[i]} ${i+1} : failure`);
    }
};  
console.log('');
console.log(`Total success: ${nbreSucces}/${nbreTests}`);
console.log('');

// pour l'exo air01.js, le deuxieme argument n'est pas passé ("la", apres "crevette magique dans la mer des etoiles")













/*const air00 = require("./air00.js");

  
console.log(lib.add(6, 4));
console.log(lib.subtract(12, 4));

// importer toute mes fonctions 3 x air00 - 3 air01 - air03

const result = {};

// initialisation d'un object resultat

air00() === ["hello", "les", "gars"] // si mon test est bien le bon resultat
    ? (result["air00 (1/3)"] = "success") // je l'ajoute a mon object success
    : (result["air00 (1/3)"] = "failure"); // sinon j'ajoute échecs
air01() === "I'm the first function"
    ? (result["air01 (2/3)"] = "success")
    : (result["air01 (2/3)"] = "failure");
air02() === "I'm the second function"
    ? (result["air02 (3/3)"] = "success")
    : (result["air02 (3/3)"] = "failure");

console.log(result);

for (const [cle, valeurs] of Object.entries(result)) {
    console.log(`${cle}: ${valeurs}`);
}
*/

//	la fonction pour confirmation d'ajout affiché dans une modale
  function addTableContent() {
    var addText = document.getElementById('inputText').value;
      alert(addText + ' a été ajouté au tableau');
  }
// déclaration d'un tableau vide pour recevoir la chaîne de caractères de l'input
var monTableau = [];
//fonction appelée au click du bouton voir
function addAndDisplayContent() {
  // récupérer la valeur de l'input avec la méthode getElementById
  var inputText = document.getElementById('inputText').value;
  // ajouter la value au début du tableau avec la méthode unshift
  monTableau.unshift(inputText);
  /* Dans la boucle avec l'instruction for on initialise une variable i à zéro
  qui nous servira d'indice lors des ajouts de données par l'incrémentation.
  On exécute ensuite les deux instructions contenues dans la boucle :
  La vérification que i est strictement inférieur à la longueur avec La propriété .length,
  puis l'incrémentation i de 1, ce qui sera fait à chaque passage dans la boucle.*/
  for (i = 0; i < monTableau.length; i++) {
  /* dans le parcours du tableau par l'instruction for, on concatène toutes les valeurs
  du tableau avec un caractère "," pour pouvoir afficher les valeurs de l'input passées
  en paramètres séparées par une virgule dans une modale après la boucle for.
  */
    (monTableau[i] + ',');
  }
  // display du tableau dans une modale et dans une div
  alert(document.getElementById('divText').innerHTML = monTableau);
}

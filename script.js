/*Exercice 1*/
/*const age = 18;
if(age>=18){
  console.log('Majeur');
} else {
  console.log('Mineur');
}*/

/*Exercice 2*/
/*const color = 'blu';
switch (color){
  case 'bleu':
    console.log('La couleur est bleu');
    break;
  case 'rouge':
    console.log('La couleur est rouge');
    break;
  case 'vert':
    console.log('La couleur est vert');
    break;
  case 'jaune':
    console.log('La couleur est jaune');
    break;
  default:
    console.log(`La couleur était : ${color}`)
}*/

/*Exercice 3*/
/*let tableauCouleur = ['bleu','rouge','vert','jaune']
for(let index = 0; index < tableauCouleur.length;index++){
  switch (tableauCouleur[index]){
    case 'bleu':
      console.log(`La couleur à l'index ${index} est : bleu`);
      break;
    case 'rouge':
      console.log(`La couleur à l'index ${index} est : rouge`);
      break;
    case 'vert':
      console.log(`La couleur à l'index ${index} est : vert`);
      break;
    case 'jaune':
      console.log(`La couleur à l'index ${index} est : jaune`);
      break;
    default:
      console.log(`La couleur ${tableauCouleur[index]} n'était pas attendue`)
  }
}*/

/*Exercice 4*/
/*function fonctionAdition(nombre1,nombre2){
  return (nombre1 + nombre2);
}

console.log(fonctionAdition(22,5));*/

/*Exericie 5*/
/*const indexListe = maListe =>{
  maString = ""
  for(let index = 0;index < maListe.length;index++){
    maString += `La couleur ${maListe[index]} se trouve à l'index ${index}`;
    if(index < maListe.length - 1){
      maString += '\n';
    }
  }
  return (maString);
}

console.log(indexListe(['bleu','rouge','vert','jaune']))*/

/*Entrainement 1*/
/*const stylo = {
  type: "plume",
  couleur: "noir",
  marque: "Bic",
  prix: "1€50",
  presentation(){
    return (`Bonjour, je suis un stylo à ${this.type}, ma couleur est le ${this.couleur}, je coûte ${this.prix} et je suis de la marque ${this.marque}`);
  }
}

console.log(stylo.presentation());*/

/*Entrainement 2*/
/*const player = {
  nom: 'Le Duc',
  prenom: 'Jean-Luc',
  sexe: 'Homme',
  tenue: 'une Chemise hawaïenne',
  backpack: ['1 compote','39 barres chocolatés','2 rapes a fromage','3 ananas'],
  desc(){
    let myString = `Je suis un(e) ${this.sexe}, je m'appelle ${this.prenom} ${this.nom}. Je suis habillé(e) avec ${this.tenue} et j'ai un sac à dos ! \nDans mon sac à dos, il y a :\n`;
    this.triAlpha();
    this.backpack.forEach(objet =>{
      myString += objet + "\n";
    })
    return (myString);
  },
  mySwap(i,j){
    let temp = this.backpack[i];
    this.backpack[j] = this.backpack[i];
    this.backpack[i] = temp;
  },
  triAlpha(){
    let myListe = [];
    for(let i = 0; i < this.backpack.length; i++){
      myListe[i] = this.backpack[i].split(' ');
    }
    let myOtherList = [];
    for(let i =0;i<this.backpack.length;i++){
      myOtherList[i] = myListe[i][1];
    }
    myOtherList = myOtherList.sort();
    let myListe2 = [];
    for(let i = 0;i<this.backpack.length;i++){
      let actual = myOtherList[i];
      if(actual==myListe[0][1]){
        myListe2[i] = myListe[0];
      }else if(actual==myListe[1][1]){
        myListe2[i] = myListe[1];
      }else if(actual==myListe[2][1]){
        myListe2[i] = myListe[2];
      }else if(actual==myListe[3][1]){
        myListe2[i] = myListe[3];
      }
    }
    let str = "";
    for(let i=0;i < myListe2.length;i++){
      str = "";
      for(let j = 0; j < myListe2[i].length; j++){
        str += myListe2[i][j];
        if(j<myListe2[i].length-1){
          str+=' ';
        }
      }
      this.backpack[i] = str;
    }
    return;
  }
}
*/
/*Entrainement 3*/
/*let entreeStandard = process.stdin;
entreeStandard.setEncoding("utf-8");
console.log("Dites quelque chose. \nDites \'exit\' pour quitter.");
entreeStandard.on("data",function(data){
  if (data === "exit\n" || data === "exit\r\n"){
    console.log("Récupération des informations complète, fermeture du programme.");
    process.exit();
  }else if (data !== "\r\n" && data !== "\n"){
    console.log(`Vous avez dit : ${data}`);
  }
});*/
/*Mini-jeu*/
let entreeStandard = process.stdin;
entreeStandard.setEncoding("utf-8");
let nbreAllumette = 13;
let max = 3;
let turn = 0;
let acutalNumber = 0;
console.log("Joueur 1 à toi de jouer !")
entreeStandard.on("data", function(data){
  if(!isNaN(entreeStandard)){
    console.log("Veuillez réessayer.");
    return;
  }
  acutalNumber = parseInt(entreeStandard);
  if(entreeStandard > max || entreeStandard < 1){
    console.log(`Seul les nombres en 1 et ${max} sont autorisée.`);
    return;
  }
  nbreAllumette -= entreeStandard;
  turn++;
  console.log(`Il reste ${nbreAllumette} allumettes !`);
  if(turn%2 !== 0){
    console.log("Au tour de l'IA !");
    let toSuppr = Math.floor(Math.random()*(max-1)) + 1;
    nbreAllumette -= toSuppr;
    console.log(`Il reste ${nbreAllumette} allumettes.`);
  }
});
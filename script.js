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
const player = {
  nom: 'Le Duc',
  prenom: 'Jean-Luc',
  sexe: 'Homme',
  tenue: 'une Chemise hawaïenne',
  backpack: ['1 compote','39 barres chocolatés','2 cuitochettes'],
  desc(){
    let myString = `Je suis un(e) ${this.sexe}, je m'appelle ${this.prenom} ${this.nom}. Je suis habillé(e) avec ${this.tenue} et j'ai un sac à dos ! \nDans mon sac à dos, il y a :\n`;
    this.backpack.forEach(objet =>{
      myString += objet + "\n";
    })
    return (myString);
  },
  mySwap(i,j){
    let temp = this.backpack[i];
    this.backpack[i] = this.backpack[j];
    this.backpack[j] = temp;
  },
  triAlpha(){
    let pass=0;
    let i = 0;
    let j =0;
    let index1;
    let index2;
    for(let tour = 0;tour<this.backpack.length-1;tour++){
      index1 = this.backpack[tour]
      index2 = this.backpack[tour+1]
      if(!isNaN(index1[i])){
        i++;
      }
      if(!isNaN(index2[j])){
        j++;
      }
      if(isNaN(index1[i]) && isNaN(index2[j])){
        if(index1.charCodeAt(i) > index2.charCodeAt(j)){
          mySwap(liste,i,j);
        } else if(index1.charCodeAt(i) < index2.charCodeAt(j)){
          pass;
        } else {
          while(index1.charCodeAt(i) == index2.charCodeAt(j)){
            if(index1.charCodeAt(i) > index2.charCodeAt(j)){
              mySwap(tour,tour+1);
            } else if(index1.charCodeAt(i) < index2.charCodeAt(j)){
              pass++;
            }
          }
        }
      }
    }
    return(this.backpack);
  }
}

console.log(player.triAlpha());

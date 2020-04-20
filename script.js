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
  backpack: ['1 compote','39 barres chocolatés','2 rapes a fromage','3 ananas'],
  desc(){
    let myString = `Je suis un(e) ${this.sexe}, je m'appelle ${this.prenom} ${this.nom}. Je suis habillé(e) avec ${this.tenue} et j'ai un sac à dos ! \nDans mon sac à dos, il y a :\n`;
    this.backpack.forEach(objet =>{
      myString += objet + "\n";
    })
    return (myString);
  },
  mySwap(i){
    let temp = this.backpack[i+1];
    this.backpack[i+1] = this.backpack[i];
    this.backpack[i] = temp;
  },
  triAlpha(){
    let liste = this.backpack;
    const len = this.backpack.length;
    let i = 0;
    let r = 1;
    while(i<len){
      let objet1 = liste[i];
      let objet2 = liste[r];
      console.log(`${objet1} et ${objet2}`);
      let j = 0;
      let k = 0
      while((objet1.charCodeAt(j) < 97 || objet1.charCodeAt(j) > 122)&&(objet2.charCodeAt(k) < 97 || objet2.charCodeAt(k) > 122)){
        if(objet1.charCodeAt(j) < 97 || objet1.charCodeAt(j) > 122){
          j++;
        }
        if(objet2.charCodeAt(k) < 97 || objet2.charCodeAt(k) > 122){
          k++;
        }
      }
      if(objet1.charCodeAt(j) > objet2.charCodeAt(k)){
        this.mySwap(j);
      }
      r++;
      if(r>=liste.length-1){
        i++;
        r=1;
      }
    }
    return(this.backpack);
  }
}

console.log(player.triAlpha());

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
const indexListe = maListe =>{
  maString = ""
  for(let index = 0;index < maListe.length;index++){
    maString += `La couleur ${maListe[index]} se trouve à l'index ${index}`;
    if(index < maListe.length - 1){
      maString += '\n';
    }
  }
  return (maString);
}

console.log(indexListe(['bleu','rouge','vert','jaune']))

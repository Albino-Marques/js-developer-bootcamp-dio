/*
const aluno = ["Albino", "Kauani", "Alberto"];

console.log(aluno);
console.log(aluno[0]);

//Para inserir no array usa-se o .push()
aluno.push("Tadeu");
console.log(aluno);
 
*/
/*
const nome = "Albino Marques dos Santos";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));

/*const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma / 5);
console.log(notas.length);
*/

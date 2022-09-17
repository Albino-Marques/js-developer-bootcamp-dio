

const funcoes = require('./main-aula-01');
const {gets, print} = require('./main-aula-01'); // Esse jeito não precisa colocar funcoes.gets ou funcoes.print ao chamar a função. 

console.log(funcoes.gets());

const pessoa = {
  nome:'Albino'
};

/*
const {nome} = pessoa;
//ou
const nome = pessoa.nome;
*/
print(gets());


/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo. 

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1;
let nota2;
let nota3;

function calculaAMedia (nota1, nota2, nota3) {
    const media = ((nota1+nota2+nota3)/3);
    if (media < 5) {
        console.log(`A sua média é ${media.toFixed(2)}, e você foi reprovado.`)
    } else if (media >= 5 && media < 7){
        console.log(`A sua média é ${media.toFixed(2)}, e você está em recuperação.`)
    } else if (media >= 7 && media <= 10) {
        console.log(`À sua média é ${media.toFixed(2)}, e você foi aprovado.`)
    } else {
        console.log('Você não inseriu valores válidos.')
    }
}

calculaAMedia(10,6,4);

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/





//canlculaIMC(97,1.67)

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let valorProduto;
let opcaoDePagamento;
function calculaDesconto(valorProduto, opcaoDePagamento){
    const descontoDebitoAVista = valorProduto - (valorProduto*0.10);
    const descontoDinheiroOuPix = valorProduto - (valorProduto*0.15);
    const descontoParceladoAteDuasVezes = valorProduto;
    const descontoAPartirDeDuasVezes = valorProduto + (valorProduto*0.10);
    if (opcaoDePagamento === 1){
        console.log(`Você vai pagar ${descontoDebitoAVista.toFixed(2)}, graças aos 10% de desconto da forma de pagamento.`);
    } else if (opcaoDePagamento === 2) {
        console.log(`Você vai pagar ${descontoDinheiroOuPix.toFixed(2)}, graças aos 15% de desconto da forma de pagamento.`);
    } else if (opcaoDePagamento === 3) {
        console.log(`Você vai pagar ${descontoParceladoAteDuasVezes.toFixed(2)}, sendo este o valor completo do produto.`);
    } else if (opcaoDePagamento === 4) {
        console.log(`Você vai pagar ${descontoAPartirDeDuasVezes.toFixed(2)}, pois, em decorrência da forma de pagamento, haverá 10% de acrescimo.`);
    } else {
        console.log('Digite uma opção válida por gentileza!')
    }
}

calculaDesconto(97,2);
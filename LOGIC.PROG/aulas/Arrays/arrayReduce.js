//o reduce retorna um valor geral

const numeros = [1,2,3,4,5,6,7,8];

let soma = 0;

for (let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i];
}

//console.log(soma);

//valorAcumulador => vai ser o valor incial;
//valorArray => vai ser o valor com que ta interando; 

const valorFinal = numeros.reduce(function(valorAcumulador, valorArray){
    return valorAcumulador + valorArray
}, 0);

//console.log(valorFinal);


const pessoas = [
    {nome: "Ana", idade:18},
    {nome: "Bia", idade:15},
    {nome: "Carlos", idade:20},
    {nome: "João", idade:11},
    {nome: "Maria", idade:29},
    {nome: "Jonas", idade:14},
];


const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray){
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiorIdade' : 'menorIdade';

    valorAcumulador[propMaiorOuMenor].push(valorArray);
    return valorAcumulador;
}, {maiorIdade: [], menorIdade: []});

//console.log(pessoasAgrupadas);

const materiais = [
    {
        nome: "Comida", 
        tipo: "Lixo normal"
    },
    {
        nome: "Lixo hospitalar", 
        tipo: "Lixo industrial"
    },
    {
        nome: "Casca de banana", 
        tipo: "Lixo normal"
    },
    {

        nome: "Residuos nucleares", 
        tipo: "Lixo industrial"
    },
    {
        nome: "Adubo orgânico", 
        tipo: "Lixo normal"
    },
    {
        nome: "Frascos de pesticida", 
        tipo: "Lixo industrial"
    },
];

const classificacaoResiduos = materiais.reduce(function(valorAcumulador, valorArray){
    const tiposLixo = valorArray.tipo === 'Lixo normal'?'lixoNormal':'lixoIndustrial';//vai verificar se o valor que vai ser interado é lixo normal ou industrial
    valorAcumulador[tiposLixo].push(valorArray);//vai adicionar os valores interados no valor inicial
    return valorAcumulador; //vai retornar o valor inicial
}, {lixoNormal: [], lixoIndustrial: []});
console.log(classificacaoResiduos);


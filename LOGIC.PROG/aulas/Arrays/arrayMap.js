const numeros = [2,3,4,5,6];

let novosNumeros = [];

for(let i = 0; i < numeros.length; i++){
    novosNumeros.push(numeros[i] * 2);
}

const numerosNovos = numeros.map(function(element){
    return element * 2;
});

const arrayMapArrow = numeros.map(element => element * 2);

//console.table(arrayMapArrow);

const nomes = ["Ana","Pedro","Teste","Prova","ONG"];
const nomesMinusculos = nomes.map(function(nome){
    return nome.toLocaleLowerCase();
});

//console.log(nomesMinusculos);

const pessoas = [
    {nome : "Ana", idade: 15},
    {nome : "Luiz", idade: 16},
    {nome : "Bia", idade: 17},
];

const media = pessoas.map(function(valor){
    let idades = valor.idade
    if(idades / 2 >= 7.5){
        console.log(idades);
    }
});

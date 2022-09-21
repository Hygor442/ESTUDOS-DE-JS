//o filter retorna um valor bolleano

const numeros = [1,2,3,4,5,6];
let mult2 = [];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        mult2.push(numeros[i]);
    }
};

//console.log(mult2);

const numFiltrados = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log(numFiltrados);


//exemplo de junção de map com filter

const arrayMapFilter = numeros.filter(num => num % 2 === 0).map(num => num * 2);

console.log(arrayMapFilter);
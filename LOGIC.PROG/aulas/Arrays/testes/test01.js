const conj = [
    {
        nome: 'User1',
        id: 1,
    },
    {
        nome: 'User2',
        id: 2,
    },
    {
        nome: 'User3',
        id: 3,
    },
    {
        nome: 'User4',
        id: 4,
    },
];

const infoExtra = {
    condicao : 'Autorizado',
};

const verificarPares = conj.reduce(function(valorAcumulador,valorArray){
    const ids = valorArray.id;
    const valores = ids % 2 === 0 ? 'listaPar' : 'listaImpar';
    valorAcumulador[valores].push(valorArray);
    return valorAcumulador;
}, {listaPar:[], listaImpar:[]});

const complementação = {
    ...verificarPares.listaPar,
    ...infoExtra,
};
console.log(complementação);
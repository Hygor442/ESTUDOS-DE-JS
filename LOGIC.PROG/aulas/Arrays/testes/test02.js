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
const filtrados = conj.filter(function(ids){
    const id = ids.id;
    const valores = id % 2 === 0;
    return valores;
});
console.log(filtrados);
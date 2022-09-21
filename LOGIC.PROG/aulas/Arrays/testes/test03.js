/*const arrayObj = [
    {nome:"Ivanildo"},
    {nome:"Hygor"},
    {nome:"Silva"},
];

arrayObj.forEach((value, index, array)=>{
    console.log(value.nome);
    console.log(index);
    console.log(array);
});
*/

const pokemons = [
    {
        name:"pikachu",
        type:"eletric"
    },
    {
        name:"squirtle",
        type:"water"
    },
    {
        name:"magikarp",
        type:"water"
    },
];

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual)=>{
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual);
    return pokemonsPorTipo;
}, {});
console.log(pokemonsPorTipo);

//const objetoFinal ={
//    water:[],
//   eletric:[]
//}
const objs = [
    {
        nome : "Matheus",
        idade : 20,
        esta_trabalhando : true,
        detalhes_profissao : {
            profissao : "Programador",
            empresa : "Empresa X"
        },
        hobbies : ["programar", "artes marciais", "pintar"] 
    },
    {
        nome : "João",
        idade : 19,
        esta_trabalhando : false,
        detalhes_profissao : {
            profissao : null,
            empresa : null
        },
        hobbies : ["Jogar", "Ler"] 
    } 
]

//console.log(objs);

//JSON

const jsonData = JSON.stringify(objs);
//console.log(jsonData);
//console.log(typeof jsonData);

//converter JSON para objeto

const objData = JSON.parse(jsonData);
console.log(objData);
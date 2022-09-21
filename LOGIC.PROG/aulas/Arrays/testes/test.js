var user2 = {
    digaOi: function(name){
        return `Olá, ${name}`;
    }
};

//console.log(user2.digaOi("Lucas"));

var cor = 'azul';

var usuario = {
    nome:'Bia',
    idade: 18,
    competencias: 
    {
        linguagens:['Go', 'C#','JS','Java'],
        hobbies:['balle', 'jiu-jitsu', 'muayThai']
    },
    estado:'MA',
    cor,
};

var infoExtra = {
    pais: 'Brasil',
    cidade: 'Santa Inês',
}

const infoCompletas = Object.assign({}, usuario, infoExtra);

var novoUsuario = {
    ...usuario,
    ...infoExtra,
};

var nomeVariavel = 'estado';
var nome = 'lastName';

var novoUsuario2 = {
    [nome]: "Ana",
    [nomeVariavel]: "São Paulo",
};

var novoUsuario = [
    {
        nome: "hygor",
        idade: 18,
    },
    {
        nome: "joaquim",
        idade: 13,
    },
    {
        nome: "Luzia",
        idade: 25,
    }
];

var usuario = {
    posicao: 0,
    get atual(){ //imprimir o resultado 
        return novoUsuario[this.posicao];
    },
    set atual(posicao){ //atribuir valor
        this.posicao = posicao;
    },
    proximo(){
        ++this.posicao;
    },
    anterior(){
        --this.posicao;
    }
};

console.log(usuario.atual);
usuario.proximo();

console.log(usuario.atual);

usuario.proximo();
console.log(usuario.atual);

usuario.anterior();
console.log(usuario.atual);

usuario.atual = 0;
console.log(usuario.atual);

usuario.atual = 2;
console.log(usuario.atual);
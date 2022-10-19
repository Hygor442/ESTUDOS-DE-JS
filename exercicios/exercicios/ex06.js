function nome(name){
    let nomeMaisuculo = name.toUpperCase();
    let nomeMinusculo = name.toLowerCase();
    let primeiroNome = name.indexOf(" ");
    let tamanhoNome =  function(name){
        let arrayNome = name.split(" ");
        let tamanhoArray = arrayNome.length - 1;
        let totalSemEspaços = name.length - tamanhoArray;
        return totalSemEspaços;

    }

    console.log(`
        Seu nome em maiusculas é ${nomeMaisuculo}
        Seu nome em minusculas é ${nomeMinusculo}
        Seu primero nome tem ${primeiroNome}
        Seu nome tem ${tamanhoNome(name)} letras
    `);
}

nome("Ana Julia Lima De Souza");


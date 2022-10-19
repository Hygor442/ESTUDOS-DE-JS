function ocorrencias(string){
    let frase = string.toUpperCase();
    let letra = "A";
    let quant = 0;

    for(let i = 0; i < string.length; i++){
        if(frase[i] === letra){
            quant++;
        }
    }

    let primeiroA = frase.indexOf("A");
    let ultimoA = frase.lastIndexOf("A");

    console.log(`
    A letra 'a' apareceu: ${quant} vezes
    A letra 'a' apareceu na primeira vez na posição ${primeiroA}
    A letra 'a' apareceu na ultima vez na posição ${ultimoA}
    `);
}

ocorrencias("A rato mora em roma")
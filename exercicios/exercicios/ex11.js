function nomeCompleto(nome){
    let nomes = nome.split(" ");
    let primeiroNome = nomes[0];
    let ultimoNome = nomes[nomes.length - 1]
    console.log(`
        Olá, ${nome}
        Seu primeiro nome é ${primeiroNome}
        Seu ultimo nome é ${ultimoNome}
    `);
}

nomeCompleto("Ivanildo Hygor Silva Santos");

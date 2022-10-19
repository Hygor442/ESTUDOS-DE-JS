function separandoDigitos(num){
    let u = num / 1 % 10;
    let d = num / 10 % 10;
    let c = num / 100 % 10;
    let m = num / 1000 % 10;

    console.log(`
        Analisando o numero ${num}:
        Unidade: ${u.toFixed(0)}
        Dezenas: ${d.toFixed(0)}
        Centenas: ${c.toFixed(0)}
        Milhar: ${m.toFixed(0)}
    `);
}

separandoDigitos(1234);
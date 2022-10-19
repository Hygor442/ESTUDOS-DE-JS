function conversor(valor, local){
    let carteira = valor;
    let cotacao = local;
    let valorCotacao = [
        {
            regiao : "EUA",
            valor  : 5.19
        },
        {
            regiao : "Europa",
            valor  : 5.04
        }
    ]

    if(valorCotacao.find(cot => cot.regiao === "EUA") && cotacao === "EUA"){
        let valor = valorCotacao.find(valor => valor.valor);
        let convertendo = carteira / valor.valor;
        console.log('$'+convertendo.toFixed(2));    
    }

    if(valorCotacao.find(cot => cot.regiao === "Europa") && cotacao === "Europa"){
        let valor = valorCotacao.find(valor => valor.valor);
        let convertendo = carteira / valor.valor;
        console.log(convertendo.toFixed(2))
    } 
}

conversor(20, "Europa");
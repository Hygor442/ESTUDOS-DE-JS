function gerar(){
    let res = document.getElementById('res')
    let comida = document.getElementById('comida')
    let bebida = document.getElementById('bebida')
    let alimento = Number(comida.value)
    let liquido = Number(bebida.value)
    //arrays
    let itens_comida = [1,2,3,4,5]
    let itens_bebida = [1,2,3,4]
    //valores que vão ser substituidos
    let com = ''
    let beb = ''
    preço_c = ''
    preço_b = ''
    //Comida
    let c = itens_comida.indexOf(alimento)//linha de conexão!
    if (c == 0){
        com = ('um Hamburguer')
        preço_c = 15.90
    } else if (c == 1){
        com = ('uma Lasanha')
        preço_c = 20.00
    } else if ( c == 2){
        com = ('um Bolo')
        preço_c = 12.50
    }else if (c == 3){
        com = ('uma Sopa')
        preço_c = 10.00
    }else if (c == 4){
        com = ('uma Pizza')
        preço_c = 45.00
    }
    //Bebidas
    let b = itens_bebida.indexOf(liquido)
    if (b == 0){
        beb = ('um Suco de caju')
        preço_b = 5.00
    } else if( b == 1){
        beb = ('um Suco de manga')
        preço_b = 7.50
    }else if ( b ==2) {
        beb = ('uma Água')
        preço_b = 2.00
    }else if (b == 3) {
        beb = ('um Refigerante de Cola')
        preço_b = 3.50
    }

    res.innerHTML = `A sua compra foi ${com} e ${beb} <br> Preço: R$${Number(preço_c + preço_b)}`
}
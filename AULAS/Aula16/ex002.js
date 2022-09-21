valores_b = [1,2,3]
valores_c = [1,2,3]
com = ''
beb = ''
function comida (n1){
    let c = valores_c.indexOf(n1)
    c = 0
    if (c == 0){
       return com =  'Pizza'
    } else if(c == 1){
        return com = 'Bolo'
    } else if (c == 2){
        return com = 'Sopa'
    }
}
function bebida (n2){
    let b = valores_b.indexOf(n2)
    b = 0
    if (b == 0){
        return beb = 'Suco'
    }else if (b == 1){
        return beb = 'Refrigerante'
    }else if (b == 2){
        return beb = 'Água'
    }
}
let res = console.log(`Você pediu uma ${comida(0)} e um ${bebida(1)}`)
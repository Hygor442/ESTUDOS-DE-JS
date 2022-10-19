let cont = "casa de ferreiro";

function verificarEspacos(str){
    return str.indexOf(' ') >= 0;
}

function isNumber(str){
    if(!isNaN(str)){
        return true;
    } else{
        return false;
    }
}

function isAlpha(str){
    if(isNaN(str)){
        return true;
    } else {
        return false;
    }
}

function isLowCapitalize(str){
    return str === str.toLowerCase() && str !== str.toUpperCase();
}

function isCapitalize(str){
    return str === str.toUpperCase() && str !== str.toLowerCase();
}

function firstCapitalize(str){
    let primeiraLetra = str[0];
    if(primeiraLetra === primeiraLetra.toLowerCase){
        return true;
    } else {
        return false;
    }
}

function isAlphaNum(str){
    if(isNumber(str) === true || isAlpha(str) === true){
        return true;
    } else {
        return false;
    }
}

console.log(`
    O tipo primitivo desse valor é : ${typeof cont}
    Possui espaços : ${verificarEspacos(cont)}
    É númerico : ${isNumber(cont)}
    É alfabetico : ${isAlpha(cont)}
    É alfanumerico : ${isAlphaNum(cont)}
    Está em minuscula : ${isLowCapitalize(cont)}
    Está em maiuscula : ${isCapitalize(cont)}
    Está capitalizada : ${firstCapitalize(cont)
    }
`);
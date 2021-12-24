function contar(){
    var ini = document.getElementById('inicio')
    var passo = document.getElementById('passo')
    var fim = document.getElementById('fim') 
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = `Contando <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalído! Considerando passo 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //contagem regrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
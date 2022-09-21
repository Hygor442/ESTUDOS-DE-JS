function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')//cria uma especie de tag fantasma no html
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade>=0 && idade <=12){
                //crinça
                img.setAttribute('src','img/garotopequeno.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/garotojovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img/garotoadulto.png')
            }else{
                //idoso
                img.setAttribute('src','img/garotovelho.png')
            }
        } else if (sex [1]) {
            genero = 'Mulher'
            if (idade >=0 && idade <=12){
                //criança
                img.setAttribute('src','img/garotapequena.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/garotajovem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','img/garotaadulta.png')
            }else{
                //idoso
                img.setAttribute('src','img/garotaidosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img) //isso faz as imagens aparecerem
    }
}
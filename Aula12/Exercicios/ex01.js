function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manhã.png'
        document.body.style.background = '#F2AD85'
    }else if (hora >= 12 && hora <19){
        //Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#F27405'
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#011126'
    }
}

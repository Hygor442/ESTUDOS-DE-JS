let valorDigitado = document.querySelector("#valorEmReal");
let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

let btnConverter = document.querySelector("#btnConverter");
let btnLimpar = document.querySelector("#btnLimpar");

let valorDoDolar = 5.19; 
let valorDoEuro = 5.03;
let valorDaLibra = 5.74;
let valorDoBitcoin = 99.929;
let valorEmReal = 0;

let moedaEstrangeira = '';
let moedaConvertida = 0.00;

function msgFormatada(moedaConvertida){
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda convertida" + moedaConvertida);
    alert("O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida);
}

function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}


btnConverter.addEventListener('click', function() {

    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            msgFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            msgFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            msgFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            msgFormatada(parseFloat(moedaConvertida).toFixed(5))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})
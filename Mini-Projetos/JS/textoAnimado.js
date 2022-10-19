let paragrafo = document.querySelector("p");
let texto = paragrafo.innerHTML;
let index = 0;

const escrever = () => {
    paragrafo.innerHTML = paragrafo.innerHTML.replace("|", "");
    if(texto.length > index){
        if(index ==0){
            paragrafo.innerHTML = texto.charAt(index);
        } else {
            paragrafo.innerHTML += texto.charAt(index);
        }
        paragrafo.innerHTML += "|";
        index++;
        setTimeout(escrever, 50);
    }
}

escrever();
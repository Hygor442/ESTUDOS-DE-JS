let url = 'https://significado.herokuapp.com/v2/';

const inputtxt = document.querySelector("#container__inputtxt");
const btn = document.querySelector("#container__btn");
const resultado = document.querySelector("#container__resultado");

btn.addEventListener("click", () => {
    let palavra = inputtxt.value;
    if(palavra === ''){
        resultado.innerHTML = `<p id="container__significado">Escreva alguma palavra no campo de busca!!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
            resultado.innerHTML = 
            `<h3 id="container__palavra">${palavra}</h3>
            <p id="container__significado"><span>1º</span>${data[0].meanings[0]}</p>
            <p id="container__significado"><span>2º</span>${data[0].meanings[1]}</p>`
        }).catch(() => {
            resultado.innerHTML = `<p id="container__significado">Não conseguir entrar essa palavra</p>`
        })
    }
});


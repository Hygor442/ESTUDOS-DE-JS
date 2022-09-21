const hora = document.querySelector(".hora");
const iniciar = document.querySelector(".start");
const pausar = document.querySelector(".pause");
const parar = document.querySelector(".stop");

let sec = 0;
let min = 0;
let hour = 0;
let intervalo;

iniciar.addEventListener("click", function(){
    contador();
    intervalo = setInterval(contador, 1000);
});

pausar.addEventListener("click", function(){
    clearInterval(intervalo);
});

parar.addEventListener("click", function(){
    clearInterval(intervalo);
    sec = 0;
    min = 0; 
    hora.innerText = "00 : 00 : 00";
});

function twoDigitals(num){
    if (num < 10){
        return ("0" + num);
    }else{
        return num;
    }
}

function contador(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            hour++
            min = 0
        }
    }
    hora.innerText = `${twoDigitals(hour)} : ${twoDigitals(min)} : ${twoDigitals(sec)}`
};
const contador1 = document.querySelector("#cont1"),
    contador2 = document.querySelector("#cont2"),
    contador3 = document.querySelector("#cont3"),
    contador4 = document.querySelector("#cont4");

let cant1 = 0, cant2 = 0, cant3 = 0, cant4 = 0, tiem = 100;

let tempo1 = setInterval(()=>{
    contador1.textContent = cant1 += 1;
    if(cant1 === 170){
        clearInterval(tempo1);
    }
},`${tiem}`);

let tempo2 = setInterval(()=>{
    contador2.textContent = cant2 += 1;
    if(cant2 === 240){
        clearInterval(tempo2);
    }
},`${tiem}`);

let tempo3 = setInterval(()=>{
    contador3.textContent = cant3 += 1;
    if(cant3 === 459){
        clearInterval(tempo3);
    }
},`${tiem}`);

let tempo4 = setInterval(()=>{
    contador4.textContent = cant4 += 1;
    if(cant4 === 630){
        clearInterval(tempo4);
    }
},`${tiem}`);
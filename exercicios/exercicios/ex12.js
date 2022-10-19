const numerosComputador = [1,2,3,4,5];
function jogo(jogador){
    let roleta = Math.floor(Math.random(numerosComputador) * 5 + 1);

    if(jogador === roleta){
        console.log("Parabens! Você venceu!")
    } else {
        console.log("Que pena! tente novamente!")
    }
}

jogo(5);
let balls = document.querySelector('.balls');
let quant = document.querySelectorAll('.slides .images');
let imagem = document.getElementById('atual');
let next = document.getElementById('next');
let voltar = document.getElementById('voltar');
let atual = 0;
let rolar = true; // vai fazer com a imagem não avançe de uma vez, quando chegar a 4s caso alguem clique

for(let i = 0; i < quant.length; i++){
    let div = document.createElement('div'); // aqui vai criar as divs dentro da class balls(html), e o id vai ser o valor de i
    div.id = i; 
    balls.appendChild(div);
}

document.getElementById('0').classList.add('imgAtual'); // aqui vai iniciar as divs criadas com o id 0 dentro de balls

let pos = document.querySelectorAll('.balls div'); // seleciona o que foi criado pelo html e polo js

for(let i = 0; i < pos.length; i++){    //passa o id para a prox img
    pos[i].addEventListener('click', () => {
        atual = pos[i].id;
        rolar = false;
        slide();
    });
}

voltar.addEventListener('click', () => {   // botao de voltar a imagem; 1º linha = id recebe -1
    atual--;
    rolar = false;
    slide();
});

next.addEventListener('click', () =>{   // botao de proxima a imagem; 1º linha = id recebe +1
    atual++;
    rolar = false;
    slide();
});

function slide(){   // passa as imagens
    if(atual >= quant.length){
        atual = 0;              //se for a ultima volta para a 1º
    }else if(atual < 0){
        atual = quant.length-1  //se for a 1º vai para ultima
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual');   // vai remove para depois adicionar com a nova margem
    imagem.style.marginLeft = -1024*atual+'px';     // define a margem oculta da proxima imagem
    document.getElementById(atual).classList.add('imgAtual');   //adiciona a margem
};

slide(); // inicia o slide

setInterval(() => {     //passada automatica de imagens
    if(rolar){
    atual++;
    slide()
    } else {
        rolar = true;
    }    
},4000) // => tempo (4s)
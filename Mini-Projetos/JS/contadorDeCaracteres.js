const desc = document.querySelector("#descricao");

desc.addEventListener("keypress", function(e){
    const inputLenght = desc.value.length;
    const maxChars = 20;

    if(inputLenght >= maxChars){
        e.preventDefault();
    }
});
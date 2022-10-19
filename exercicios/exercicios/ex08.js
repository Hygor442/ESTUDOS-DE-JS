function santos(nome){
    let nomes = nome.split(" ");
    if(nomes[0] === "Santo"){
        console.log(true); 
    }else{
        console.log(false);
    }
}
santos("Amaro dos Santos");
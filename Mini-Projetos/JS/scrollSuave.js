function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

document.querySelector("#goUp").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#container");
    console.log("Ta funcionando")
});
document.querySelector("#goDow").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#footer");
    console.log("Ta funcionando")
});
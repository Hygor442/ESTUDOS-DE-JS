const valorCalculado = document.querySelector("#valor-calculado");
valorCalculado.style.display = "none";
const each = document.querySelector("#each");
each.style.display = "none";
const btn = document.querySelector("button");


btn.addEventListener("click", function(){
    let totalConta = document.querySelector("#total-conta").value;
    console.log(totalConta)
    let taxaServico = document.querySelector("#taxa-servico").value;
    console.log(taxaServico)
    let numeroPessoas = document.querySelector("#num-pessoas").value;
    console.log(numeroPessoas)
    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        alert("Por favor, coloque um valor válido!");
        return;
    }

    if(numeroPessoas === "" || numeroPessoas <= 1){
        numeroPessoas = 1;
        each.style.display = "none";
    }
    else{
        each.style.display = "block";
    }

    let totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    let total = totalTaxaServico + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.querySelector("#valor-calculado").style.display = "block";
    document.querySelector("#valor-pessoa").innerHTML = total;
});
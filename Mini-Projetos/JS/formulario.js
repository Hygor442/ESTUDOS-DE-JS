const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-btn");

const erroMessage = document.querySelector(".msg");

const items = document.querySelector(".items");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

   const nomeValue = nameInput.value;
   const emailValue = emailInput.value;

    //verifica se os campos estão vazios
   if(nomeValue === '' || emailValue === ''){
    erroMessage.textContent = "Por favor, preencha todos os campos!";
    erroMessage.classList = "error";
    //vai limpar a msg que é gerada 
    setTimeout(() => {
        erroMessage.textContent = "";
        erroMessage.classList = ""
    },3000);
    return;
   }

   //vai criar li detro da ul com os itens(nomes de usuarios)
   const li = document.createElement("li");
   li.classList = "item";
   li.innerHTML = `Nome: ${nomeValue} <br> Email: ${emailValue}`;
   items.appendChild(li);

   //limpar os campos
   nameInput.value = "";
   emailInput.value = "";
});

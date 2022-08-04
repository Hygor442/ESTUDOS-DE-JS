const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-buttom');
const taskConteiner = document.querySelector('.taks-conteiner');

const validateInput = () => inputElement.value.trim().length > 0; // vai ler se há espaços vazios e removelos, alem de ver se há algo digitado

const handleAddTask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);
    
    if (!inputIsValid) {
        return inputElement.classList.add('error');
    }

    const taskItemConteiner = document.createElement('div');//cria a div
    taskItemConteiner.classList.add('task-item');

    const taskParagraph = document.createElement('p');//cria o p
    taskParagraph.innerText = inputElement.value; // vai pegar o texto antigo/atual

    taskParagraph.addEventListener('click', () => hadleClick(t));

    const deleteItem = document.createElement('i');// cria a tag do icone
    deleteItem.classList.add('far');
    deleteItem.classList.add('fa-trash-alt');

    deleteItem.addEventListener('click', hadleDeleteClick());

    taskItemConteiner.appendChild(taskParagraph);// vai adicionar o itens dentro da div
    taskItemConteiner.appendChild(deleteItem);

    taskConteiner.appendChild(taskItemConteiner);

    inputElement.value = ""; // vai limpar o input atual
};

const hadleClick = (taskParagraph) => {
    const tasks = taskConteiner.childNodes;

    for (const task of tasks){
        if (task.firstChild.isSameNode(taskParagraph)){
            task.firstChild.classList.toggle('completed');
        }
    }
};

const hadleDeleteClick = () =>{

};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove('error');
    }
};

addTaskButton.addEventListener('click', () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());
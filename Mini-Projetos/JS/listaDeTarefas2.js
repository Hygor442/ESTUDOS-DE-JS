//variaveis
const addBtn = document.querySelector("#add-btn");


//função de adicionar terefas
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        //clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionando na lista de tarefas
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            checkTask(this) // vai fazer referencia a qual função
        })

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //limpar texto
        document.querySelector("#task-title").value = "";
    }
}

//função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função de concluir tarefa
function checkTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

//evento de adicionar tarefa
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    addTask();
});
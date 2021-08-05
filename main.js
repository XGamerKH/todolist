const addNewTask = () => {
    let newTask = document.getElementById("newToDo").value;
    if (!newTask) {alert("Please type something in first");return}
    if (newTask) {
        let newTaskText = document.createTextNode(newTask);
        newTask = document.createElement("LI");
        let id = Date.now();
        newTask.setAttribute('id', id);
        newTask.appendChild(newTaskText);
        document.getElementById("list").appendChild(newTask)
        newTask.addEventListener("click", () => {
            let thisTask = document.getElementById(id);
            thisTask.classList.contains("done") ?  thisTask.classList.remove("done"): thisTask.classList.add("done")
        });
        newTask.addEventListener("dblclick", () => {
            let thisTask = document.getElementById(id)
            thisTask.remove()
        })
    }
    document.getElementById("newToDo").value = ""
}
document.getElementById("add").addEventListener("click", addNewTask);

const clearCompleted = () => {
    let elements = document.querySelectorAll(".done");
    elements.forEach(element => element.remove());
}
document.getElementById("clear").addEventListener("click", clearCompleted)

const removeAllChildNodes = () => {
    let parent = document.getElementById("list")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
document.getElementById("empty").addEventListener("click", removeAllChildNodes);

document.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    addNewTask()
  }
});

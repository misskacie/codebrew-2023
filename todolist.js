//adding task
function addTask() {
    var task = document.createElement("p");
    var inputValue = document.getElementById("new-task").value;
    var t = document.createTextNode(inputValue);
    let txt = document.createElement("span");
    let box = document.createElement("span");
    box.textContent = " x ";
    task.classList.add("todo-item");
    box.classList.add("box","unchecked");
    txt.classList.add("todo","unchecked");
    task.appendChild(box);
    txt.appendChild(t);
    task.appendChild(txt);
   document.getElementById("todo-list").appendChild(task);
    document.getElementById("new-task").value = "";
}

//checking off items
var list = document.getElementById('todo-list');
list.addEventListener('click', function(ev) {
    console.log(ev.target.classList);
    if (ev.target.classList[0] == "box") {
        ev.target.classList.toggle('checked');
        ev.target.classList.toggle("unchecked");
        console.log(ev.target.parentElement.lastElementChild.classList);
        ev.target.parentElement.lastElementChild.classList.toggle("checked");
        ev.target.parentElement.lastElementChild.classList.toggle("unchecked");
        console.log(ev.target.parentElement.lastElementChild.classList);
        console.log(ev.target.parentElement.lastElementChild.lastElementChild);
    }
}, false);

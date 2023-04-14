/*function findImg() {
    let img = document.querySelector("img");
    img.addEventListener('click', function() {
        img.classList.toggle('unchecked');
        console.log(img.classList);
        if (img.classList == "unchecked") {
            img.src = "Images/uncheckedBox.svg";
            img.style.width = "20px";
            img.parentElement.style.textDecoration = "none";
        } else {
            img.src = "Images/checkedBox.svg";
            img.style.width = "20px";
            img.parentElement.style.textDecoration = "line-through";
        }
    }, false);

}*/

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
    /*let img = document.createElement("img");
    img.src = "Images/uncheckedBox.svg";
    img.classList.toggle("unchecked");
    img.style.width = "20px";
    img.style.lineHeight = "20px";
    img.style.border = "1px solid black";*/
    task.appendChild(box);
    txt.appendChild(t);
    task.appendChild(txt);
   // li.getStyleAttribute(list-style-type)
  /*if (inputValue === '') {
    alert("please enter a task");
  } else {*/
    document.getElementById("todo-list").appendChild(task);
  //}
    document.getElementById("new-task").value = "";
    //let img = document.querySelector("img");
}

// Add a "checked" symbol when clicking on a list item
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
       // ev.target.parentElement.classList.toggle("unchecked");
        //ev.target.parentElement.classList.toggle("checked");
    }
}, false);

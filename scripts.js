var catHappiness = 0;
var progressBar = document.getElementById("bar");
var countLabel = document.getElementById("count-label");
const catImage = document.querySelector("img");

var catHappiness = sessionStorage.getItem("catHappiness")
var width = sessionStorage.getItem("width")
var width = (catHappiness / 3000) * 100;

progressBar.style.width = width + "%";
progressBar.innerHTML = width.toFixed(0) + "%";



// when the mouse is moved over the cat image (simulating petting the cat) cat happiness is increased
catImage.addEventListener('mousemove', () => {
    catHappiness++;
    var width = (catHappiness / 3000) * 100;
    progressBar.style.width = width + "%";
    progressBar.innerHTML = width.toFixed(0) + "%";
    sessionStorage.setItem("catHappiness",catHappiness)
    sessionStorage.setItem("width",width)

});

// every 1000 milliseconds reduce the cat happiness score by 1 (min 0 max 300)
setInterval(function() {
    var width = (catHappiness / 3000) * 100;
    progressBar.style.width = width + "%";
    progressBar.innerHTML = width.toFixed(0) + "%";
    if (catHappiness > 0 ){
    catHappiness--;
    sessionStorage.setItem("catHappiness",catHappiness)
    }
  },100);

function goToTodoList() {
    window.location.href = "todolist.html";
}
function goToFeedTheCat() {
    window.location.href = "feedthecat.html";
}
function goToBirdWatching() {
    window.location.href = "birdwatching.html";
}
function goToPetTheCat() {
    window.location.href = "index.html";
}

if(sessionStorage.getItem('tasks')){
    document.querySelector('#tasks').innerHTML = sessionStorage.getItem('tasks');
}

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `;
        document.querySelector('#newtask input').value = '';
        sessionStorage.setItem('tasks', document.querySelector('#tasks').innerHTML);
    }
}
document.querySelector('#tasks').addEventListener('click', function(event){
    if(event.target && event.target.matches('button.delete')){
        event.target.parentNode.remove();
        sessionStorage.setItem('tasks', document.querySelector('#tasks').innerHTML);

        catHappiness = catHappiness + 10000
        sessionStorage.setItem("catHappiness",catHappiness)
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width.toFixed(0) + "%";
    }
});


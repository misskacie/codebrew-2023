var counter = 0;
var progressBar = document.getElementById("bar");
var countLabel = document.getElementById("count-label");
function incrementCounter() {
if (counter < 100) {
    counter++;
    var width = (counter / 100) * 100;
    progressBar.style.width = width + "%";
    progressBar.innerHTML = width.toFixed(0) + "%";
}
}

function goToTodoList() {
    window.location.href = "todolist";
}

function goToFeedTheCat() {
    window.location.href = "feedthecat";
}

function goToBirdWatching() {
    window.location.href = "birdwatching";
}
var counter = 0;
var progressBar = document.getElementById("bar");
var countLabel = document.getElementById("count-label");
const catImage = document.querySelector("img");


catImage.addEventListener('mousemove', () => {
    if (counter < 3000) {
        counter++;
        var width = (counter / 3000) * 100;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width.toFixed(0) + "%";
    }
});

function goToTodoList() {
    window.location.href = "todolist.html";
}

function goToFeedTheCat() {
    window.location.href = "feedthecat.html";
}

function goToBirdWatching() {
    window.location.href = "birdwatching.html";
}
var catHappiness = 0;

var progressBar = document.getElementById("bar");

var countLabel = document.getElementById("count-label");

const catImage = document.querySelector("img");

var catHappiness = sessionStorage.getItem("catHappiness")
var width = sessionStorage.getItem("width")
var width = (catHappiness / 3000) * 100;

progressBar.style.width = width + "%";
progressBar.innerHTML = width.toFixed(0) + "%";

setInterval(function() {
    var width = (catHappiness / 3000) * 100;
    progressBar.style.width = width + "%";
    progressBar.innerHTML = width.toFixed(0) + "%";
    if (catHappiness > 0 ){
    catHappiness--;
    }
  },100);

// when the mouse is moved over the cat image (simulating petting the cat) cat happiness is increased
catImage.addEventListener('mousemove', () => {
    if (catHappiness < 3000) {
        catHappiness++;
        var width = (catHappiness / 3000) * 100;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width.toFixed(0) + "%";
        sessionStorage.setItem("catHappiness",catHappiness)
        sessionStorage.setItem("width",width)
    }
});

// every 1000 milliseconds reduce the cat happiness score by 1 (min 0 max 300)


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
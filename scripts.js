var catHappiness = 0;
var progressBar = document.getElementById("bar");
var countLabel = document.getElementById("count-label");
const catImage = document.querySelector("img");

// when the mouse is moved over the cat image (simulating petting the cat) cat happiness is increased
catImage.addEventListener('mousemove', () => {
    if (catHappiness < 3000) {
        catHappiness++;
        var width = (catHappiness / 3000) * 100;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width.toFixed(0) + "%";
    }
});
// every 1000 milliseconds reduce the cat happiness score by 1 (min 0 max 300)
setInterval(function() {
    if (catHappiness > 0 ){
    catHappiness--;
    }
  }, 1000);

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
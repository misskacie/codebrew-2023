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
        var catHappiness = sessionStorage.getItem("catHappiness")
        catHappiness = catHappiness + 10
        sessionStorage.setItem("catHappiness",catHappiness)
    }
});
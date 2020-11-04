const crow = document.getElementsByClassName('crowimg')[0]
const button = document.getElementsByClassName('btn')[0]


var h = 33

button.addEventListener("click",fly)

function fly(){
    console.log(localStorage.getItem('fly'))

    h-=5
    crow.style.top = h+"vh"
    localStorage.setItem('fly',true)
    console.log(localStorage.getItem('fly'))
}



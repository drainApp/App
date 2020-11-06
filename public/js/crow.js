const crow = document.getElementsByClassName('crowimg')[0]
const button = document.getElementsByClassName('btn')[0]


var height = 33
var left = 14

button.addEventListener("click",fly)

function fly(){
    console.log(localStorage.getItem('fly'))

    height-=10
    left-=4
    crow.style.left = left+"vw"
    crow.style.top = height+"vh"
    localStorage.setItem('fly',true)
    console.log(localStorage.getItem('fly'))
}



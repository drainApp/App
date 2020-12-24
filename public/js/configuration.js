var slider = document.getElementById("myRange");
var output = slider.value;				// 처음에 0
var ear = document.getElementById('ear')
var slash = document.getElementById('slash')
var Initializationbtn = document.getElementById('Initialization')
var soundbtn = document.getElementById('left')
            
localStorage.setItem("configComplete", true);



slider.onmouseup = function() {// 슬라이더 움직일 때 값에 따라 다르게 들어가게
    alert('음악을 들을 수 없는 환경이라면 게임을 플레이하지 말아주세요')
    this.value=5
}

ear.addEventListener("click",earclick)
function earclick(){
	slash.style.display="inline";
	ear.classList.add('fall')
}

soundbtn.addEventListener("click",soundbtnclick)
function soundbtnclick(){
    window.open('sound.html')
}

Initializationbtn.addEventListener("click",
    Initializationevent
)
function Initializationevent(){
    if(confirm("주의! 전체 진행 내역을 초기화합니다")){
    localStorage.setItem('end', false)
    localStorage.setItem('redRoof',false)
    localStorage.setItem('way',false)
    localStorage.setItem('crows',false)
    
    localStorage.setItem('fly',false)
    localStorage.setItem('room',false)
    localStorage.setItem('whiteWay',false) 
    localStorage.setItem('configComplete',false)
    localStorage.setItem('wall',false)
    }
}

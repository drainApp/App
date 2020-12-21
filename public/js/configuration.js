var slider = document.getElementById("myRange");
var output = slider.value;				// 처음에 0
            
slider.onmouseup = function() {// 슬라이더 움직일 때 값에 따라 다르게 들어가게
    alert('음악을 들을 수 없는 환경이라면 게임을 플레이하지 말아주세요')
    this.value=4
}


var ear = document.getElementById('ear')
var slash = document.getElementById('slash')
ear.addEventListener("click",earclick)
function earclick(){
	slash.style.display="inline";
	ear.classList.add('fall')
}
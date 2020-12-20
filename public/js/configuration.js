var slider = document.getElementById("myRange");
var output;
output = slider.value;				// 처음에 0
            
slider.oninput = function() {
    output= this.value;	
    console.log(output)			// 슬라이더 움직일 때 값에 따라 다르게 들어가게
}

var ear = document.getElementById('ear')
var slash = document.getElementById('slash')
ear.addEventListener("click",earclick)
function earclick(){
	slash.style.display="inline";
	ear.classList.add('fall')
}
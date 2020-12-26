var end = document.getElementsByClassName('ending')[0]
var imgg = document.getElementsByClassName('i')[0]

var ck=25
var s
var flag = false 
var start= function(){
    s = setInterval(function(){
    if(!flag){
        if(ck>1500){
            ck=0.01
            imgg.style.display="none"
            flag=true
        }
        else if(ck<800)ck+=7
        else ck+=12
        imgg.style.filter = "brightness(" + ck+"%)"
        console.log(ck)
    }
    if(flag){
        end.style.opacity = ck
        ck+=0.008
        console.log(ck)
        if(ck>1)stop()
    }
},50)
}
start()

stop=function(){
    clearInterval(s)
}


var bgm = new Audio('');
var bgm_url = "./assets/end/Kontrol.mp3";
bgm = new Audio(bgm_url);
if(localStorage.getItem('configComplete') == 'true'){
    bgm.volume = localStorage.getItem('volume');
    bgm.play();
}
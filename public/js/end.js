body = document.getElementsByTagName('body')[0]
var ck=25
var s
var start= function(){
    s = setInterval(function(){
    if(ck==10000)stop()
    if(ck<1800)ck+=10
    else ck+=15
    body.style.filter = "brightness(" + ck+"%)"
    console.log(ck)
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
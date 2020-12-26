body = document.getElementsByTagName('body')[0]
var ck=25
var s
var flag=false
var start= function(){
    s = setInterval(function(){
    if(!flag){
        ck+=5
        if(ck==10000)flag=true
    }
    // else{ 
    //     ck-=1
    //     if(ck==25)flag=false
    // }
    body.style.filter = "brightness(" + ck+"%)"
    console.log(ck)
},50)
}
start()


var bgm = new Audio('');
var bgm_url = "./assets/end/Kontrol.mp3";
bgm = new Audio(bgm_url);
if(localStorage.getItem('configComplete') == 'true'){
    bgm.volume = localStorage.getItem('volume');
    bgm.play();
}
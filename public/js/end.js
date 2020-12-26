body = document.getElementsByTagName('body')[0]
var ck=2
var s
var start= function(){
    s = setInterval(function(){
    var imgurl = "url('../assets/end/Ending" +ck+ ".png')"
    ck++
    body.style.backgroundImage = imgurl
    if(ck==8)stop()
},500)
}
start()

stop=function(){
    clearInterval(s)
}
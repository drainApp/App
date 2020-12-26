var input = document.getElementById('searchbar')
var btn = document.getElementsByClassName('b')[0]
var t = document.getElementsByClassName('t')[0]

input.focus()

btn.addEventListener("click",()=>{
    search()
})

var go = (e) => {
    if (e.keyCode == 13) btn.click()
}
input.addEventListener("keypress",go)


function search(){
var input_text = input.value
    switch (input_text) {
        case "까마귀":
        case '까마귀':
            window.open('crow.html')
            break;
            
        case "벽":
        case '벽':
            window.open('main.html')
            break;
        
        case "끝":
        case '끝':
            window.open('end.html')
            break;    
            
        case "붉은 지붕":
        case '붉은 지붕':
        case "붉은지붕": 
        case '붉은지붕':
            window.open('roomescape.html')
            break;
        case "흰 길":
        case '흰 길':
        case "흰길":
        case '흰길':
            window.open('way.html')
            break;
        case "환경 설정":
        case '환경 설정':
        case "환경설정": 
        case '환경설정':
            window.open('configuration.html')
            break;
    
        default:
            break;
    }

    input.value=""

}



var bgm = new Audio('');
var bgmck=false
var bgm_url = "./assets/search/Ambush_Cut.mp3";
bgm = new Audio(bgm_url);

document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem('way') == 'true'){
        document.getElementById("redRoof").innerHTML = "- 3 붉은 지붕"
    }
    else if(localStorage.getItem('redRoof') == 'true'){
        document.getElementById("redRoof").innerHTML = "▲ 3 붉은 지붕 (new)!"
    }
    else{
        document.getElementById("redRoof").innerHTML = "3"
    }

    if(localStorage.getItem('redRoof') == 'true'){
        document.getElementById("crow").innerHTML = "- 2 까마귀"
    }
    else if(localStorage.getItem('crows') == 'true'){
        document.getElementById("crow").innerHTML = "▲ 2 까마귀 (new)!"
    }
    else{
        document.getElementById("crow").innerHTML = "2"
    }

    if(localStorage.getItem('end') == 'true'){
        document.getElementById("way").innerHTML = "- 4 흰 길"
    }
    else if(localStorage.getItem('way') == 'true'){
        document.getElementById("way").innerHTML = "▲ 4 흰 길 (new)!"
    }
    else{
        document.getElementById("way").innerHTML = "4"
    }

    if(localStorage.getItem('end') == 'true'){ 
        document.getElementById("wall").innerHTML = "▲ 1 끝 (new)!"
        //여기에 wall 글자색 빨간색으로 변경.
        document.getElementById("wall").style.color='red'
        //여기에 전체 index.html 배경색 회색으로 변경.
        document.getElementsByTagName('body')[0].style.backgroundColor='gray'
    }
    
    else if(localStorage.getItem('crows') == 'true'){
        document.getElementById("wall").innerHTML = "- 1 벽"
    }
    
    else if(localStorage.getItem('configComplete') == 'true'){
        document.getElementById("wall").innerHTML = "▲ 1 벽 (new)!"
        document.getElementById("wall").style.color='black'
        document.getElementsByTagName('body')[0].style.backgroundColor='#b12a38'
        t.innerHTML=""
    }
    else{
        document.getElementById("wall").innerHTML = "1"
        document.getElementById("wall").style.color='black'
        document.getElementsByTagName('body')[0].style.backgroundColor='#b12a38'
        t.innerHTML="먼저 환경설정에서 소리 권한 허용을 진행해주세요"
    }
    if(localStorage.getItem('configComplete') == 'true' && !bgmck){
        bgm.volume = localStorage.getItem('volume');
        bgm.play();
        bgmck = true
    }
});


// － ▼ ▲ 

var searchCheck = setInterval(
    function a(){
        console.log("searchCheck");
        
        if(localStorage.getItem('way') == 'true'){
            document.getElementById("redRoof").innerHTML = "- 3 붉은 지붕"
        }
        else if(localStorage.getItem('redRoof') == 'true'){
            document.getElementById("redRoof").innerHTML = "▲ 3 붉은 지붕 (new)!"
        }
        else{
            document.getElementById("redRoof").innerHTML = "3"
        }

        if(localStorage.getItem('redRoof') == 'true'){
            document.getElementById("crow").innerHTML = "- 2 까마귀"
        }
        else if(localStorage.getItem('crows') == 'true'){
            document.getElementById("crow").innerHTML = "▲ 2 까마귀 (new)!"
        }
        else{
            document.getElementById("crow").innerHTML = "2"
        }

        if(localStorage.getItem('end') == 'true'){
            document.getElementById("way").innerHTML = "- 4 흰 길"
        }
        else if(localStorage.getItem('way') == 'true'){
            document.getElementById("way").innerHTML = "▲ 4 흰 길 (new)!"
        }
        else{
            document.getElementById("way").innerHTML = "4"
        }

        if(localStorage.getItem('end') == 'true'){ 
            document.getElementById("wall").innerHTML = "▲ 1 끝 (new)!"
            //여기에 wall 글자색 빨간색으로 변경.
            document.getElementById("wall").style.color='red'
            //여기에 전체 index.html 배경색 회색으로 변경.
            document.getElementsByTagName('body')[0].style.backgroundColor='gray'
        }
        
        else if(localStorage.getItem('crows') == 'true'){
            document.getElementById("wall").innerHTML = "- 1 벽"
        }
        
        else if(localStorage.getItem('configComplete') == 'true'){
            document.getElementById("wall").innerHTML = "▲ 1 벽 (new)!"
            document.getElementById("wall").style.color='black'
            document.getElementsByTagName('body')[0].style.backgroundColor='#b12a38'
            t.innerHTML=""
        }
        else{
            localStorage.setItem('volume', 0.5);
            t.innerHTML="먼저 환경설정에서 소리 테스트를 진행해주세요"
            document.getElementById("wall").innerHTML = "1"
            document.getElementById("wall").style.color='black'
            document.getElementsByTagName('body')[0].style.backgroundColor='#b12a38'
        }

        if(localStorage.getItem('configComplete') == 'true' && !bgmck){
            bgm.volume = localStorage.getItem('volume');
            bgm.play();
            bgmck = true
        }
    }, 500
);







// localStorage.setItem('fly',false)
// localStorage.setItem('room',false)
// localStorage.setItem('redRoof',false)
// localStorage.setItem('crows',false)
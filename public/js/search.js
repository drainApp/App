var input = document.getElementById('searchbar')
var btn = document.getElementsByClassName('b')[0]

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
var searchCheck = setInterval(
    function a(){
        console.log("searchCheck");
        if(localStorage.getItem('redRoof') == 'true'){
            document.getElementById("redRoof").innerHTML = "3 붉은 지붕"
        }
        else document.getElementById("redRoof").innerHTML ="3 잠긴 항목"

        if(localStorage.getItem('crows') == 'true'){
            document.getElementById("crow").innerHTML = "2 까마귀"
        }
        else document.getElementById("crow").innerHTML ="2 잠긴 항목"

        if(localStorage.getItem('way') == 'true'){
            document.getElementById("way").innerHTML = "4 흰 길"
        }
        else document.getElementById("way").innerHTML ="4 잠긴 항목"

        if(localStorage.getItem('end') == 'true'){ 
            document.getElementById("wall").innerHTML = "1 끝 (new)!"
            //여기에 wall 글자색 빨간색으로 변경.
            document.getElementById("wall").style.color='red'
            //여기에 전체 index.html 배경색 회색으로 변경.
            document.getElementsByTagName('body')[0].style.backgroundColor='gray'
        }
        else{ 
            document.getElementById("wall").innerHTML ="1 벽"
            document.getElementById("wall").style.color='black'
            document.getElementsByTagName('body')[0].style.backgroundColor='#b12a38'

        }
    }, 500
);




if(localStorage.getItem('redRoof') == 'true'){
    document.getElementById("redRoof").innerHTML = "3 붉은 지붕"
}
else document.getElementById("redRoof").innerHTML ="3 잠긴 항목"

if(localStorage.getItem('crows') == 'true'){
    document.getElementById("crow").innerHTML = "2 까마귀"
}
else document.getElementById("crow").innerHTML ="2 잠긴 항목"

if(localStorage.getItem('way') == 'true'){
    document.getElementById("way").innerHTML = "4 흰 길"
}
else document.getElementById("way").innerHTML ="4 잠긴 항목"

if(localStorage.getItem('end') == 'true'){ 
    document.getElementById("wall").innerHTML = "1 끝 (new)!"
    //여기에 wall 글자색 빨간색으로 변경.
    document.getElementById("wall").style.color='red'
    //여기에 전체 index.html 배경색 회색으로 변경.
    document.getElementsByTagName('body')[0].style.backgroundColor='gray'
}
else{ 
    document.getElementById("wall").innerHTML ="1 벽"
    document.getElementById("wall").style.color='black'
    document.getElementsByTagName('body')[0].style.backgroundColor='#b12a38'

}


// localStorage.setItem('fly',false)
// localStorage.setItem('room',false)
// localStorage.setItem('redRoof',false)
// localStorage.setItem('crows',false)
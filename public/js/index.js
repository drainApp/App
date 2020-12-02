var searchCheck = setInterval(
    function a(){
        if(localStorage.getItem('redRoof') == 'true'){
            document.getElementById("redRoof").innerHTML = "붉은 지붕"
        }
        if(localStorage.getItem('crow') == 'true'){
            document.getElementById("crow").innerHTML = "까마귀"
        }
    }, 2000

);


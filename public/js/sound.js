combtn = document.getElementsByClassName('complete')[0]
combtn.addEventListener("click",()=>{
    localStorage.setItem("configComplete", true);
})
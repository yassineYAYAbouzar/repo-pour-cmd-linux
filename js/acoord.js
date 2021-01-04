let accordien = document.querySelectorAll('h3');
let i ;
for(i = 0 ; i< accordien.length ; i++){
    accordien[i].addEventListener('click',function(){
        let next = this.nextElementSibling;
        if(next.style.maxHeight){
            next.style.maxHeight = null;

        }else{
            next.style.maxHeight = next.scrollHeight + "px";
        }
    });
}
let spin = document.getElementById('spin');
spin.onmouseenter = function(){
    this.classList.add("fa-spin");
}
spin.onmouseleave = function(){
    this.classList.remove("fa-spin");
}
let scrool = document.getElementById('scrool');
scrool.onclick=function(){
    window.scrollTo(0,0);
};
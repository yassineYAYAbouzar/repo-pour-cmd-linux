var accordien = document.querySelectorAll('h3');
var i ;
for(i = 0 ; i< accordien.length ; i++){
    accordien[i].addEventListener('click',function(){
        var next = this.nextElementSibling;
        if(next.style.maxHeight){
            next.style.maxHeight = null;

        }else{
            next.style.maxHeight = next.scrollHeight + "px";
        }
    });
}

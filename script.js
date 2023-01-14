
let img = document.querySelectorAll(".card img"),
    card = Array.from( document.querySelectorAll(".card"));
console.log(img.length)
console.log(card)
img.forEach((item)=>{ item.onclick = function(){ 
    for(let i = 0 ; i < img.length ; i++){
        card[i].classList.remove("active");
           if(item == img[i]){
            card[i].classList.add("active");
           }
       } 
    }
});



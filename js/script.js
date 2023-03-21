//MILESTONE 1
//Creazione arrey
const immagesArrey = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]
console.log(immagesArrey);

const containerItems = document.querySelector(".slide-items");

for (let i = 0; i < immagesArrey.length; i++) {
    const currentImages = immagesArrey[i];
    
    const sliderItem = `<div class="item">
                                <img src="${currentImages}" alt="">
                        </div>`;
    console.log(sliderItem);

    containerItems.innerHTML += sliderItem;
}

//MILESTONE2
//Stato di partenza
let itemArrey = document.getElementsByClassName("item");
const topBtn = document.querySelector(".arrow-top");
const bottomBtn = document.querySelector(".arrow-bottom");

//Dichiarare variabile 0 per aggiungere classe active all'elemento
let classActive = 0;
itemArrey[classActive].classList.add("active");

//MILESTONE3
//Generare i bottoni
topBtn.addEventListener("click", function(){
    //Togliere la classe active dalla prima immagine
    itemArrey[classActive].classList.remove("active");
    //Implementare active
    
    if(classActive === itemArrey.length - 1) {
        classActive = 0;
    } else {
        classActive++;
    }
    
    
    //aggiungere la classe active a tutte le altre immagini
    itemArrey[classActive].classList.add("active");

})

bottomBtn.addEventListener("click", function(){
    itemArrey[classActive].classList.remove("active");
    
    if(classActive === 0) {
        classActive = itemArrey.length - 1;
    } else {
        classActive--;
    }
    
    itemArrey[classActive].classList.add("active");
    
    
})

let autoplay = setInterval(myCarousel, 3000);

function myCarousel () {
    itemArrey[classActive].classList.remove("active");
    
    if(classActive === itemArrey.length - 1) {
        classActive = 0;
    } else {
        classActive++;
    }
    
    itemArrey[classActive].classList.add("active");
    
}

itemArrey.addEventListener("mouseover", stopAutoplay)


function stopAutoplay () {
    clearInterval(autoplay)
}


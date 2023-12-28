import { hamburger, myFavouriteColour } from "./hamburger.js";


console.log (myFavouriteColour);


function welcome (Name, age){

    console.log(`Jestem ${Name} i mam ${age} lat`);
    

};

welcome ("pioter",30);
welcome ("justa",40);
welcome ("dzerry",50);


console.log(hamburger)

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation-box--js')
    navigation.classList.toggle('navigation--open')
})






import { hamburger, myFavouriteColour } from "./hamburger.js";
import { differenceInDays } from "date-fns";

const resultDays = differenceInDays(
      new Date(2024, 1, 24, 0, 0),
      new Date(2024, 0, 3, 23, 0)
     )

     console.log (resultDays)

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


const tab = [134,144,43,556];
let sum = 0;
for (let i=0; i<tab.length; i++) {
    sum += tab[i];
};

console.log(sum);





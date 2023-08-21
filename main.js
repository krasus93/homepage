







function welcome (Name, age){

    console.log(`Jestem ${Name} i mam ${age} lat`);
    

};

welcome ("pioter",30);
welcome ("justa",40);
welcome ("dzerry",50);




const hamburger = document.querySelector ('.hamburger-menu-js')

console.log(hamburger)

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation-box--js')
    navigation.classList.toggle('navigation--open')
})





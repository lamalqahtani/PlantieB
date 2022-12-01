const btn = document.getElementById('b-menu');
const burgerMenu = document.querySelector('.burger-nav');
let isDisplayed = false;
btn.addEventListener('click',()=>{
    if(!isDisplayed){
        burgerMenu.style.display = 'block';
        isDisplayed = true;
    }else{
        burgerMenu.style.display = 'none';
        isDisplayed = false;
    }
})
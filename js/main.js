const MenuBtn=document.querySelector('.burger__menu');
const MenuList=document.querySelector('.header__main__list');
const MenuClouse=document.querySelector('.button__close');
const MenuBG=document.querySelector('.menu__close');

MenuBtn.addEventListener('click', ()=>{
    MenuList.classList.toggle('burger__open');
    MenuBG.classList.toggle('menu__open');
});

MenuClouse.addEventListener('click', ()=>{
    MenuList.classList.remove('burger__open');
    MenuBG.classList.toggle('menu__open');
})

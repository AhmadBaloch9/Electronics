// ===== Java Script For Toggle Menu =======//
const navLinks=document.querySelector(` .nav-bar .nav-links`);
const rightBar=document.querySelector(` .nav-bar .close`);
const toggleMenu =document.querySelector(`.icons .menu`);



toggleMenu.addEventListener(`click`,()=>{
  navLinks.style.left= "0";  
 rightBar.style.left= `90%`;
});
rightBar.addEventListener(`click`,()=>{
   navLinks.style.left =`-300px`;
   rightBar.style.left= `-30%`;
})
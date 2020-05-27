//inner top nav menu 
/*inner_nav.innerHTML = `<ul id="menu_inner_nav" class="menu active">
<li>HOME</li>
<li>VIDEOS</li>
<li>PLAYLIST</li>

<li>COMMUNITY</li>
<li>CHANNELS</li>
<li>ABOUT</li>

</ul>`; */


// Hamburger menu toggle //




//alert("i am working")
//pop-menu - when click on avatar icon//

const popup_menu = document.getElementById("popup_menu");

document.getElementById("user").addEventListener("click", () => {
  popup_menu.classList.toggle("able");
});

document.getElementById("profile").addEventListener("click", () => {
  popup_menu.classList.toggle("able");
});
/*
document.getElementById("right").addEventListener("click", () => {
  popup_menu.classList.add("able");
});

document.getElementById("left").addEventListener("click", () => {
  popup_menu.classList.add("able");
});
document.getElementById("menu").addEventListener("click", () => {
  popup_menu.classList.add("able");
});*/


//functions to change the background----- dark mode simulation/////////

const btnSwitch = document.querySelector('#switch');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');

btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('active');
  right.classList.toggle('d_mode')
  left.classList.toggle('d_mode')
  nav.classList.toggle('d_mode')
  menu.classList.toggle('d_mode')
});
// to toggle button to change from light to dark mode
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('d_mode')
});
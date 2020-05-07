//inner top menu 
inner_nav.innerHTML = `<ul id="menu" class="menu active">
<li>HOME</li>
<li>VIDEOS</li>
<li>PLAYLIST</li>

<li>COMMUNITY</li>
<li>CHANNELS</li>
<li>ABOUT</li>

</ul>`;


// Hamburger menu toggle //
const contenedor_video = document.getElementById("main_container");
const contenedor_menu = document.getElementById("menu");

document.getElementById("boton-menu").addEventListener("click", () => {
  contenedor_video.classList.toggle("active");
  contenedor_menu.classList.toggle("active");
});
//min width 800px//
const resize = () => {
  if (window.innerWidth >= 800) {
    contenedor_video.classList.remove("active");
  } else {
    contenedor_video.classList.add("active");
  }
};
resize();
window.addEventListener("resize", () => {
  resize();
});

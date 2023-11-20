function togglePop() {
    document.querySelector("#bar").classList.toggle("active");
}
function barToggle(){
    document.querySelector("#menubar").classList.toggle("active");
    document.querySelector(".drop").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("active");
}
function filterTimezone(){
    document.querySelector(".filter").classList.toggle("active");
}
function nasaPlus(){
    document.querySelector(".plus-mobile").classList.toggle("active");
    document.querySelector(".sub-plus-mobile").classList.toggle("active");
}
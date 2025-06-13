let menu ;
let menu_abierto = false;
let menu_boton;





window.addEventListener("DOMContentLoaded", (event) => { //esperar a que carge el sistema dom

    //console.log('inicio-cargardom');//tracer

    menu = document.getElementById('menu navbar'); 
    menu_boton = document.getElementById('menu boton');
    console.log(menu); //debug   

    //console.log('fin-cargardom');//tracer
});


function menu_navbar() {
    if (menu_abierto == false) {
        menu_abierto = true;
        menu.classList.remove("hidden")
        menu_boton.classList.add("bg-zinc-600")
    } else {
        menu_abierto = false;
        menu.classList.add("hidden")
        menu_boton.classList.remove("bg-zinc-600")
    }
    console.log(menu_abierto); //debug
}
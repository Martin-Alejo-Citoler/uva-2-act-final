let elementos_borde;
let elementos_fondo;
let elementos_texto;
let elementos_boton;
let elementos_fondo_2;
let elementos_fondo_3;
let elementos_hyperlink;


let modo_oscuro = false;

function actualizar_modo_oscuro(elementos,clase_1,clase_2) {
    if (modo_oscuro == true) {
        for (let i = 0; i < elementos.length; i++) {
            elementos[i].classList.replace(clase_1,clase_2);
        }

    } else {
        for (let i = 0; i < elementos.length; i++) {
            elementos[i].classList.replace(clase_2,clase_1);
        }
    }
}

function cambiar_modo_oscuro() {
    if (modo_oscuro == false) {
        modo_oscuro = true;
    } else {
        modo_oscuro = false;
    }
    //console.log('modo oscuro:', modo_oscuro); //tracer

    actualizar_modo_oscuro(elementos_fondo,"bg-zinc-100","bg-zinc-800");
    actualizar_modo_oscuro(elementos_borde,"border-zinc-300","border-zinc-600");
    actualizar_modo_oscuro(elementos_texto,"text-slate-950","text-slate-100");
    actualizar_modo_oscuro(elementos_fondo_2,"bg-zinc-200","bg-zinc-700");
    actualizar_modo_oscuro(elementos_fondo_3,"bg-zinc-300","bg-zinc-600");

    actualizar_modo_oscuro(elementos_boton,"active:bg-zinc-800","active:bg-zinc-100");
    actualizar_modo_oscuro(elementos_boton,"hover:bg-zinc-100","hover:bg-zinc-800");
    actualizar_modo_oscuro(elementos_boton,"active:text-slate-100","active:text-slate-950");

    actualizar_modo_oscuro(elementos_hyperlink,"text-blue-700","text-blue-500")
    actualizar_modo_oscuro(elementos_hyperlink,"visited:text-purple-700","visited:text-purple-500")
}

window.addEventListener("DOMContentLoaded", (event) => { //esperar a que carge el sistema dom

    //console.log('inicio-cargardom');//tracer

    elementos_fondo = document.querySelectorAll(".bg-zinc-100");
    elementos_borde = document.querySelectorAll(".border-zinc-300");
    elementos_texto = document.querySelectorAll(".text-slate-950");
    elementos_fondo_2 = document.querySelectorAll(".bg-zinc-200");
    elementos_fondo_3 = document.querySelectorAll(".bg-zinc-300");
    elementos_boton = document.querySelectorAll(".boton-modo-oscuro"); //es mas facil indicar que botones son afectados por el modo oscuro que excluir otros botones
    elementos_hyperlink = document.getElementsByTagName('a'); //solo afecta a los hyperlinks seteados con el color azul/violeta.

    //console.log('fin-cargardom');//tracer
});
let form ;
let form_nombre ;
let form_mail ;
let form_asunto ;
let form_mensaje ;
let parrafo_mensaje_salida ;
//no puedo definir los elementos como constantes, ya que tiene q cargar el dom antes de obtener los elementos; ademas, tienen que ser definidos afuera  de la funcion para ser globales

 



window.addEventListener("DOMContentLoaded", (event) => { //esperar a que carge el sistema dom

    //console.log('inicio-cargardom');//tracer

    form = document.getElementById('form');
    form_nombre = document.getElementById('nombre');
    form_mail = document.getElementById('mail');
    form_asunto = document.getElementById('asunto');
    form_mensaje = document.getElementById('mensaje');
    parrafo_mensaje_salida = document.getElementById('mensaje salida');    

    form.addEventListener('submit', escribir_resultado);

    //console.log('fin-cargardom');//tracer
});



function validar_simple(texto) { //manda false si el string enviado esta vacio

    if (texto == '') { 
        return false;
    } else { 
        return true;
    }
        
}



function validar_email(texto) { //manda true si el string tiene la estructura de un email

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular- define un string que consiste de: una logitud de caracteres que no sean espacio o @; seguida de un @; seguido de otra longitud; seguido de un punto; y terminado por otra longitud.
    return pattern.test(texto);
        
}



function escribir_resultado() {

    //console.log('pre-preventdefault');//tracer
    event.preventDefault(); //evitar que se envie el formulario
    //console.log('post-preventdefault');//tracer

    nombre_valido = validar_simple(form_nombre.value);
    mail_valido = validar_email(form_mail.value);
    asunto_valido = validar_simple(form_asunto.value);
    mensaje_valido = validar_simple(form_mensaje.value);

    if( nombre_valido == true && mail_valido == true && asunto_valido == true && mensaje_valido == true) {

        parrafo_mensaje_salida.innerHTML = 'Gracias, ' + form_nombre.value + ' por contactarte! Te enviaremos una respuesta a tu mail en unos dias.';

    } else {

        parrafo_mensaje_salida.innerHTML =  'Por favor añadir';

        if (nombre_valido == false) {
            parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' un nombre';

        }

        if (mail_valido == false) {
            
            if (nombre_valido == false) { //añadir un y o una coma entre este elemento y el anterior, si es neceario y gramaticamente correcto

                if (asunto_valido == false || mensaje_valido == false) { 
                    parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ',';

                } else {
                    parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' y';
                }
            }

            parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' un mail';

        }

        if (asunto_valido == false) {

            if (nombre_valido == false || mail_valido == false) { //añadir un y o una coma entre este elemento y el anterior, si es neceario y gramaticamente correcto

                if (mensaje_valido == false) {
                    parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ',';
                    
                } else {
                    parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' y';
                }
            }

            parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' un asunto';

        }

        if (mensaje_valido == false) {

            if (nombre_valido == false || mail_valido == false || asunto_valido == false ) { //añadir una y entre este elemento y el anterior, si es neceario y gramaticamente correcto
                parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' y';

            }

            parrafo_mensaje_salida.innerHTML = parrafo_mensaje_salida.innerHTML + ' un mensaje';

        }
    }
    
    
    //console.log('fin-escribirresultado');//tracer
}
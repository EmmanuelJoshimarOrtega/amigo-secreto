// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Esto crea la lista
let nombresAgregados = [];


function añadirAmigo() {
    let añadir = document.getElementById('amigo').value;
    if (nombresAgregados.includes(añadir))
        return alert ("Este nombre ya fue ingresado")
    
        if (añadir !== "") {
            nombresAgregados.push(añadir);

            console.log(nombresAgregados)
            console.log(nombresAgregados.length)/* Solo para revisar que este bien hecho*/ 
            limpiarCaja();
        } else {
            alert ("Por favor, escribe un nombre");
            
            
            return;
        }
    }


function limpiarCaja() {
    document.querySelector('#amigo').value = "";
    return;
}

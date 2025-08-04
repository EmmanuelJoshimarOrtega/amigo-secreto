// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAgregados = []; // Creamos nuestra lista(array)


function añadirAmigo() { //Creamos la funcion del boton, lo cual activara todas las funciones enlazadas a esta
    let añadir = document.getElementById('amigo').value; // defeinimos que nuestra variable va a obtener desde el input los nombres que se anoten en el
    if (nombresAgregados.includes(añadir))  //Empezamos a crear especificaiones en este caso definimos que si se ingresa un mismo nombre 2 veces nos regrese una alerta
        return alert ("Este nombre ya fue ingresado")
    
        if (añadir !== "") {  // Especificamos que si el nombre no esta en blanco procedemos a añadir el nombre a la lista
            nombresAgregados.push(añadir);

            //console.log(nombresAgregados) //Podemos activarlos para revisar que los nombres se esten agregando a la lista
            //console.log(nombresAgregados.length) // y que el numero de nombres coincida con la cantidad en la lista
            limpiarCaja();  //Activamos la funcion de vaciar el input despues de añadir exitosamente un nombre
            mostrarAmigos(); //Activamos la funcion que nos permite ver la lista de amigos que se ha añadimos exitosamente y les crea  un <li> (Listed Item)

        } else { //Caso conrario de escribir un nombre nos arroja este alert
            alert ("Por favor, escribe un nombre");
            
            
            return; //Cerramos las acciones de nuestra funcion principal
        }
}

function mostrarAmigos() {   //Creamos la funcion
    let lista = document.getElementById('listaAmigos');   // Creamos una variable para definir en que parte del HTML vamos a mostrar los nombres, en este caso en <ul>"listaAmigos" (Unordered List), esto se obtuvo por el id
    lista.innerHTML = "";  // Borramos lo que esta en la lista antes de agregar nuevos <li> esto va a evitar que haya duplicados cuando se actualice la lista
   // nombresAgregados.forEach((item)=>{  //encontre primero como hacer funcionar el .forEach pero no supe como desarrollarlo
     //   console.log(item)
    for (let i = 0; i < nombresAgregados.length; i++){  //Iniciamos un bucle (for) para recorrer nuestro array nombresAgregados y el (i) indice le dice que se repita el bucle tantas veces como items haya en el array
    //let variable = nombresAgregados[i];  //Cree esta variable para poder ver en la consola si se estaba creando correctamente la lista de nombres
    //console.log(variable)
        let nuevoNombre = document.createElement("li"); //Creamos una variable que crea un nuevo elemento HTML de tipo <li> pero aun no contine los nombres
        nuevoNombre.textContent = nombresAgregados[i]; // Asignamos a la variable anterior  el texto que contiene el <li>, el cual accede a los elementos de nuestro array con el indice que creamos anteriormente
        lista.appendChild(nuevoNombre); //Agrega el nuevo <li> dentro de <ul> que se selecciono al inicio y permite ver la lista en el navegador
        // esto ultimo fue lo mas dificil de investigar ya que no lo mencionan en ninguna parte del curso (╯°□°）╯︵ ┻━┻)
 
    }

}

function sortearAmigo() {   //Creamos la funcion
    if (nombresAgregados.length === 0){  // Condicionamos a que al menos tenga 1 nombre ingresado
        alert ('Agrega por lo menos a 1 amigo');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random()*nombresAgregados.length);   // Establecemos que vamos a generar un numero aleatorio que puede ser tan largo como la cantidad de items en nuestro array, tuve que quitar el +1 ya que de lo contario no toma en cuenta al primer (0) item de nuestro array
    let amigoElegido = nombresAgregados[numeroAleatorio];   // Establecemos una variable que va a tomar el numero generado anteriormente y lo va a relacionar con el item correspondiente a nuestro array
    let resultado = document.getElementById('resultado');   // Creamos una variable para definir en que parte del HTML vamos a mostrar los nombres, en este caso en <ul>"resultado", esto se obtuvo por el id
    resultado.innerHTML = `<li>${amigoElegido} es el amigo secreto</li>`;   //Con esto borramos lo que hubiera anteriormente en el HTML y lo repmplazamos con lo que pusimos entre los acentos invertidos, que es el resultado de la variable que escogio pseudoaleatoriamente y relaciono el nombre del amigo
    return;
}
 
 

function limpiarCaja() {   // Esta fujncion vacia la caja
    document.querySelector('#amigo').value = "";
    return;
}

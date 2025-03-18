let amigos = []; //arreglo para guardar los nombres

function agregarAmigo() {
    //capturamos el valor de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); //eliminamos espacios en blanco

    //validamos la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.'); //mensaje de error si esta vacio
        return; //salimos de la funcion
    }

    //actualizar el arreglo
    amigos.push(nombreAmigo); //añadimos el nombre al arreglo

    //limpiar el campo de entrada
    inputAmigo.value = ''; //restablecemos el campo de texto a una cadena vacia

    //actualizamos la lista de amigos
    actualizarListaAmigos();
}

//actualizamos la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiamos la lista existente
    listaAmigos.innerHTML = '';

    //agregamos los nombres en el arreglo <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); //creamos un nuevo elemento <li>
        li.textContent = amigos[i]; //asignamos nombre del amigo a contenido
        listaAmigos.appendChild(li); //agrega el <li> a la lista
    }
}

function sortearAmigo() {
    //validamos que ya haya amigos en el arreglo
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.'); //advertencia si el arreglo no tiene nombres
        return; //salimos de la funcion
    }

    //generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    //mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}

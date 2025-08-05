// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde se guardarán los nombres
let listaDeAmigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Verifica que no esté vacío
    if (nombre === '') {
        alert('Por favor, escribe un nombre');
        return;
    }

    // Agrega a la lista
    listaDeAmigos.push(nombre);

    // Limpia el input
    input.value = '';

    // Actualiza visualmente la lista en el HTML
    actualizarListaAmigos();

}

// Funcion Actualizar Amigos>
function actualizarListaAmigos() {
    // Obtiene el elemento donde se mostrará la lista de amigos
    const lista = document.getElementById('listaAmigos');

    // Limpia el contenido actual del <ul>, para evitar duplicados al volver a renderizar
    lista.innerHTML = '';

    // Recorre el array de amigos
    listaDeAmigos.forEach((amigo) => {
        // Crea un nuevo elemento <li>
        const li = document.createElement('li');

        // Le asigna el nombre del amigo como texto
        li.textContent = amigo;

        // Agrega el <li> al <ul>
        lista.appendChild(li);
    });
}

// Funcion para sortear al amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Verifica que haya al menos un nombre en la lista
    if (listaDeAmigos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Primero debes añadir al menos un amigo.';
        resultado.appendChild(li);
        return;
    }

    // Obtiene un índice aleatorio basado en la longitud del array
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    // Muestra el nombre sorteado en la lista de resultados
    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}
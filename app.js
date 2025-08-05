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
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

}
// Lista donde se guardarán los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    actualizarLista();
}

// Función para actualizar la lista de nombres en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpiar resultados previos

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    const li = document.createElement("li");
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}! `;
    resultado.appendChild(li);
}

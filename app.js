let listanombres = [];

function asignartexto(elemento, texto) {
    elemento.textContent = texto;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == '') {
        alert('nombre no valido');
    } else {
        listanombres.push(nombre);
        document.getElementById('amigo').value = "";
        mostrarNombres(); // Actualiza la lista en pantalla
    }
}
function mostrarNombres() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    for (let i = 0; i < listanombres.length; i++) {
        let item = document.createElement('li');
        asignartexto(item, listanombres[i]);
        listaNombres.appendChild(item);
    }
}
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (listanombres.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }
    let indice = Math.floor(Math.random() * listanombres.length);
    let nombreSorteado = listanombres[indice];
    resultado.innerHTML = `<li>Amigo sorteado: ${nombreSorteado}</li>`;
}
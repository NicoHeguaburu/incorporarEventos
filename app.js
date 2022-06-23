class comentario {
    constructor(nombre, comentario) {
        this.nombre = nombre;
        this.comentario = comentario;
    }
}

let contenedor = document.querySelector("#contenedor");
let enviar = document.querySelector("#enviarID");

enviar.addEventListener("click", guardarComentario);

function guardarComentario() {
    let inputNombre = document.querySelector("#nombreID").value;
    let inputOpinon = document.querySelector("#opinionID").value;
    let newComentario = new comentario(inputNombre, inputOpinon);

    let divComentario = document.createElement("div");
    divComentario.innerHTML = `<h4 class="texto">Nombre: ${newComentario.nombre}</h4> <h4 class="texto">Comentario: ${newComentario.comentario}</h4><hr>`
    contenedor.appendChild(divComentario);
}
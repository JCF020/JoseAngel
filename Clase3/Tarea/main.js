"user strict";
window.addEventListener('load', () => {
const lista = document.getElementById("listado");
const form = document.getElementById("formulario");

//valores de los input




const getTareas = () => {
    let tareas = JSON.parse(localStorage.getItem("tareas"))
    if (!tareas) {
        localStorage.setItem("tareas", JSON.stringify([]))
        tareas = JSON.parse(localStorage.getItem("tareas"))
    }
    return tareas
}

let tareas = getTareas()

const crearLista = function () {
    limpiarLista()

    for (let index = 0; index < tareas.length; index++) {

        const item = document.createElement("li")
        item.classList.add('list-group-item');
        item.dataset.id = index

        const p1 = document.createElement("p")
        p1.innerText = tareas[index].titulo

        const p2 = document.createElement("p")
        p2.innerText = tareas[index].descripcion

        const button = document.createElement("button");
        button.classList.add("btn", "btn-light", "me-3")
        button.innerText = "Borrar"
        button.dataset.id = tareas[index].id
        button.addEventListener('click', borrarTarea)
        p2.innerText = tareas[index].descripcion

        const button2 = document.createElement("button");
        button2.classList.add("btn", "btn-light")
        button2.innerText = "Editar"
        button2.dataset.id = index
        button2.addEventListener('click', editarTarea)


        item.append(p1)
        item.append(p2)
        item.append(button)
        item.append(button2)

        lista.append(item)
    }
}

const limpiarLista = function () {
    let hijos = document.querySelectorAll("li")
    if (hijos.length > 0) {
        for (let i = 0; i < hijos.length; i++) {
            lista.removeChild(hijos[i])
        }
    }
}


const actulizarStorage = () => localStorage.setItem("tareas", JSON.stringify(tareas))

const accionFormulario = function (event) {
    event.preventDefault()

    // Agregar un elemento al final 
    // de la lista o array
    let tarea;
    if (event.target.id.value) {
        tarea = tareas.find(function (tar) {
            return tar.id === event.target.id.value
        })

        tarea.titulo = event.target.titulo.value;
        tarea.descripcion = event.target.descripcion.value

        tareas = tareas.filter(function (tar) {
            return tar.id !== tarea.id
        });


    } else {
        tarea = {
            titulo: event.target.titulo.value,
            descripcion: event.target.descripcion.value,
            id: event.target.descripcion.id
        }
    }

    tareas.push(tarea)
    actulizarStorage()
    form.reset()
    crearLista()

}

const borrarTarea = function (event) {
    let respuesta = confirm("Desea eliminar este registro");
    let tarea;

    if (respuesta) {
        tareas = tareas.filter(function (tar) {
            return tar.id !== event.target.dataset.id
        });
        actulizarStorage()
        crearLista()
    }
}

const editarTarea = function (event) {
    let id = event.target.dataset.id
    let tarea = tareas[id]
    form.id.value = tarea.id
    form.titulo.value = tarea.titulo
    form.descripcion.value = tarea.descripcion
}

form.addEventListener("submit", accionFormulario)

crearLista()
})
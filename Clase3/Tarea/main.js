
const lista = document.getElementById("listado");
const form = document.getElementById("formulario");

//valores de los input
const descripcion = document.getElementById('descripcion')
const titulo      = document.getElementById('titulo');


//let items = document.getElementById('inputValor');
//console.log(boton);
let item = '';


const crearLista = function(evento){

    //valor del input
    //let items = evento.target.inputValor.value;
    
    // for(let i = 0; i<=2; i++){
        
        //const item = document.createElement("li");
        
         this.item += `<li class="list-group-item">
                        ${titulo.value} <br>
                        ${descripcion.value}
                    </li>`;

        //console.log(descripcion.value);
        //console.log(item);
        
        //item.innerHTML = item;

        document.getElementById('item').innerHTML = this.item;
        //item.classList.add('estiloLi');
        //lista.append(item)
    //}

}

const accion = function(event) {
    event.preventDefault()
    
    crearLista(event)
}


form.addEventListener("submit", accion)

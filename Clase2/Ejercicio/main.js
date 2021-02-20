
const boton = document.getElementById("formulario");
const div = document.getElementById("DIVcambiante");
//console.log(boton);



const accion = function(event) {
    event.preventDefault()

    
    color = event.target.inputColor.value;
    tamanoWidth = event.target.inputTamano.value;
    tamanoHeight = event.target.inputTamanoHe.value;

    div.style.backgroundColor =  color;
    div.style.width = tamanoWidth;
    div.style.height = tamanoHeight;

}


boton.addEventListener("submit", accion)
//console.log(colorCambiante);
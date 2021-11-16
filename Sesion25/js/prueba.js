//Función para eliminar la caja resumen de los datos del formulario. DOM
//Inicializamos la variable "div" a null.
function eliminarCajaResumen(){
    //Si existe la caja o el div...
    var div = document.getElementById('div');
    if(div !== null){
        while (div.hasChildNodes()){
            div.removeChild(div.lastChild);
        }
    }else{
        alert ("No existe la caja previamente creada.");
    }
}
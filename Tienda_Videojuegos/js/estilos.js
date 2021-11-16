function guardarDato(){
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    localStorage.setItem(email, contraseña);
    document.getElementById("email").value = "";
    document.getElementById("contraseña").value = "";
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
       for (var i = 0; i <= localStorage.length - 1; i++) {
           var key = localStorage.key(i);
           registro += '<li>' + '<span class="nom">' + key + '</span>' 
           + '<span class="nom">' + localStorage.getItem(key) + '</span>' + '</li><br>';
       } 
    }
    document.getElementById('clientes').innerHTML = registro;
}

function limpiar() {
    console.log('Se guardo');
    formulario.reset();
    return false;
}
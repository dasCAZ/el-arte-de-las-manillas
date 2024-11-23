const nombreUsuario = localStorage.getItem("nombreUsuario"); //llama el nombre del localstorage y lo almacena en la constante

//Condicion, si hay valor en la constante ejecutar lo siguiente. 
if (nombreUsuario) {
    document.getElementById("mensajeBienvenida").textContent = `Bienvenid@ ${nombreUsuario}`;
} else {
    document.getElementById("mensajeBienvenida").textContent = "Bienvenid@";
}
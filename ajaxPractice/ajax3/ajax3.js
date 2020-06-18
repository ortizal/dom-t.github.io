window.addEventListener("load", inicio);
function inicio(){
    document.getElementById("nombre").addEventListener("keyup",mostrarNombre);
}
function mostrarNombre(e){
    var cadena = e.target.value;
    // var cadena = document,getElementById("nombre").value;
}
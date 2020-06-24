window.addEventListener("load",inicio);
function inicio(){
    document.getElementById("nombre").addEventListener("keyup",mostrarNombre);

}
function mostrarNombre(){
    //var cadena = e.target.value;
    var cadena = document.getElementById("nombre").value;
    if (cadena.length ==0 ){
        document.getElementById("sugerencia").innerHTML = "";
        return;
    }else{
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("sugerencia").innerHTML = this.responseText;
            }
        };
        xhr.open("GET","ajax4.php?nombre="+cadena, true);
        xhr.send();
    }
}

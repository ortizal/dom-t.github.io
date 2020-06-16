document.getElementById("cambiaContenido").addEventListener("click",cambiaContenido);
function cambiaContenido(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("texto").innerHTML = this.responseText;
        }
    };
    /* .open: especidica la solicitud
    -GET/POST
    -Archivo: txt, pdf, xml, json, etc
    -True/False: Metodo de envio=> Si es true el metodo es asincrono y si es False el método es sincrono
    */
    xhr.open("GET","holamundo.txt","true");
    /*.send: envia la solicitud al servidor.
    Si utilizamos POST debemos pasar los datos por parámetros
     */
    xhr.send();

}
document.getElementById("cargarCatalogo").addEventListener("click",cargarCatalogo);
function cargarCatalogo(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            cargarXML();
        }
    };
    xhr.open("GET", "cd_catalog.xml", true);
    xhr.send();
}
function cargarXML(){
    /* Capturar respuesta de la solicitud
    */
   var docxml = xml.responseXML;
   var tabla = "<tr><th>Artista</th><th>Titulo</th></tr>";
   var discos = docxml.getElementByTagName("CD");
   for ( var i = 0; i < discos.length; i++){
       tabla += "<tr><td>";
       tabla += discos[i].getElementByTagName("ARTIST")[0].textContent;
       tabla += "</td><td>";
       tabla += discos[i].getElementByTagName("TITLE")[0].textContent;
       tabla += "</td></tr>";
   }
   document.getElementById("demo").innerHTML = tabla;
}
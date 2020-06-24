/* SINTAXIS:
    - Datos: "nombre": "valor" //Siempre el nombre va entre comillas
    - Valor: número, booleano y null sin comillas; cadena (comillas); objetos (llaves); array (corchetes). No podemos enviar funciones, fechas ni undefined.
    Ej. var ada = {"nombre":"Ada", "nacimiento":1815, "pais":"Reino Unido"} */

//OBJETOS: nombre del objeto y entre llaves, par nombre:valor
var objeto1 = {
    "nombre": "Ada",
    "nacimiento": 1815,
    "pais": "Reino Unido"
};

//Acceso: utilizamos la notación punto o corchetes
alert(objeto1.nombre + " : " + objeto1.nacimiento + " : " + objeto1.pais);
//alert(objeto1["nombre"]+" : "+objeto1["nacimiento"]+" : "+objeto1["pais"]);

//Recorrer los nombres de un objeto
for (var x in objeto1) {
    document.getElementById("demo").innerHTML += x + ":" + objeto1[x] + "<br/>";
}

//Objetos que contienen otros objetos
var objeto2 = {
    "nombre": "Ada",
    "nacimiento": 1815,
    "pais": "Reino Unido",
    "hijos": {
        "hijo1": "Anne Blunt",
        "hijo2": "Byron King-Noel",
        "hijo3": "Ralph King-Milbanke"
    }
}

//Acceso a un objeto dentro de otro objeto
var y = objeto2.hijos.hijo1; //objeto2.hijos["hijo1"];
alert("Hijo 1 es " + y);

//ARRAYS: nombre del array, y entre corchetes los valores
var hijos = {
    "hijos": ["Anne Blunt", "Byron King-Noel", "Ralph King-Milbanke"]
}
var objeto3 = {
        "nombre": "Ada",
        "nacimiento": 1815,
        "pais": "Reino Unido",
        "hijos": ["Anne Blunt", "Byron King-Noel", "Ralph King-Milbanke"]
    }
    //Acceso
var z = objeto3.hijos[1];
alert("Hijo 2 es " + z);

//Recorrer los elementos de un array
var z1 = "";
for (var i in objeto3.hijos) {
    z1 += objeto3.hijos[i] + ", ";
}
document.getElementById("demo").innerHTML += "Todos los hijos: " + z1 + "<br/>";

var z2 = "";
for (var i = 0; i < objeto3.hijos.length; i++) {
    z2 += objeto3.hijos[i];
}
document.getElementById("demo").innerHTML += "Todos los hijos: " + z2 + "<br/>";

//Si queremos borrar elementos de un objeto utilizamos "delete"

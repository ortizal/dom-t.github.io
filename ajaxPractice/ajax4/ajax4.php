<?php
// Crear un array de Nombres
$a = array("Alexis","Javier","Joseph","Fabio","Miguel","Brayan");
// Capturar el valor de una url
$nombre = $_REQUEST['nombre'];
$sugerencia ="";
if ($nombre !== ""){
    $nombre = strtolower($nombre);
    $long = strlen($nombre);
    foreach($a as $nom){
        if (stristr($nombre, substr($nom, 0, $long))){
            if($sugerencia ===""){
                $sugerencia = $nom;
            }
            else{
                $sugerencia = "$sugerencia, $nom";
            }
        };
    }
}
if ($sugerencia == ""){
    echo ("No hay sugerencia");
}else{
    echo $sugerencia;
    //echo ($sugerencia=="")?"No hay sugerencia":$sugerencia;
}
?>
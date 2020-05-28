<?php
require_once '../../conexion/php/conexion.php';
$conn = getConn();
$nombre = $_POST['nombre'];
$logo = $_FILES['logo'];
$idalmacen = $_POST['almacen'];
if ($logo["type"] == "image/jpg" or $logo["type"] == "image/jpeg"){
    $nom_encriptado = md5($logo["tmp_name"]).".jpg";
/*     $ruta = "../../imagenes/".$nom_encriptado;
    move_uploaded_file($logo["tmp_name"],$ruta); */
    $query = "INSERT INTO logo (nombre, logo, almacen_idalmacen) 
                VAlUES ('$nombre','$nom_encriptado','$idalmacen')";
    echo mysqli_query($conn, $query);
}
?>
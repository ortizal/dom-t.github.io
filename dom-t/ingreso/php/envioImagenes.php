<?php
require_once '../../conexion/php/conexion.php';
$nombre = $_POST['nombre'];
$logo = $_FILES['logo'];
$idalmacen = $_POST['almacen'];
$conn = getConn();
if ($logo["type"] == "image/jpg" or $logo["type"] == "image/jpeg"){
    $nom_encriptado = md5($logo["tmp_name"]).".jpg";
    $ruta = "../../imagenes/".$nom_encriptado;
    $query = "INSERT INTO logo (nombre, logo, almacen_idalmacen) 
                VAlUES ('$nombre','$logo','$idalmacen')";
    echo mysqli_query($conn, $query);
}
?>


<?php
/* $ruta_carpeta = "";
$nombre_archivo = "imagen_".date("dHis") .".". pathinfo($_FILES["imagen"]["name"]);
$ruta_guardar_archivo = $ruta_carpeta . $nombre_archivo;
if (move_uploaded_file($_FILES["imagen"]["tmp_name"],$ruta_guardar_archivo)){
    echo "imagen cargada";
}else{
    echo "no se pudo cargar";
} */

?>
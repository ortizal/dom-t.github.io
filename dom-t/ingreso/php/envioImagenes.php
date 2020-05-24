<?php
require_once '../../conexion/php/conexion.php';
$nombre = $_POST['nombre'];
$logo = addcslashes(file_get_contents($_FILES['logo']['tap_name']));
$idalmacen = $_POST['almacen'];
$conn = getConn();
$query = "INSERT INTO logo (nombre, logo, almacen_idalmacen) 
            VAlUES ('$nombre','$logo','$idalmacen')";
echo mysqli_query($conn, $query);
?>
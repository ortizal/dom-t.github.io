<?php
require_once '../../conexion/php/conexion.php';
$nombre = $_POST['nombre'];
$logo = $_POST['telefono'];
$idalmacen = $_POST['correo'];
$conn = getConn();
$query = "INSERT INTO logo (nombre, logo, almacen_idalmacen) 
            VAlUE ('$nombre','$logo','$idalmacen')";
echo mysqli_query($conn, $query);
?>
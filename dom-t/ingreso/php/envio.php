<?php
require_once '../../conexion/php/conexion.php';
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$direccion = $_POST['direccion'];
$categoria = $_POST['categoria'];
$conn = getConn();
$query = "INSERT INTO almacen (nombre, telefono, email, direccion, categoriaAlmacen_idtable1) 
            VAlUE ('$nombre','$telefono','$correo','$direccion','$categoria')";
echo mysqli_query($conn, $query);
?>
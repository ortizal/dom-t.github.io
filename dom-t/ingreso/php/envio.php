<?php
require_once '../../conexion/php/conexion.php';
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$direccion = $_POST['direccion'];
$categoria = $_POST['categoria'];
$subCategoria = $_POST['subCategoria'];
$conn = getConn();
$query = "INSERT INTO almacen (nombre, telefono, email, direccion, categoriaAlmacen_idtable1, subCategoria_idsubCategoria) 
            VAlUE ('$nombre','$telefono','$correo','$direccion','$categoria','$subCategoria')";
echo mysqli_query($conn, $query);
?>
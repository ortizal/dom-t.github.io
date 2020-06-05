<?php
require_once '../../conexion/php/conexion.php';
function getSubCategorias(){
    $conn = getConn();
    $id = $_POST['id'];
    $query = "SELECT * FROM subcategoria WHERE categoriaAlmacen_idtable1 = $id";
    $resultado = $conn->query($query);
    while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
        $subCategorias .="<div><a href='#'>$row[nombre]</a></div>";
    }
    return $subCategorias;
}
echo getSubCategorias();
?>
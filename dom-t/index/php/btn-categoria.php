<?php
require_once require_once '../../conexion/php/conexion.php';
function getSubCategorias(){
    $conn = getConn();
    $query = "SELECT * FROM subcategoria WHERE subcategoria.categoriaAlmacen_idtable1 = 3";
    $resultado = $conn->query($query);
    while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
    //    $imagen = base64_encode($row['imagen']);
        $categorias .="<div value = $row[idtable1]><a href='#'>$row[nombre]</a></div>";
    }
    return $categorias;
}
echo getSubCategorias();
?>
<?php
require_once '../../conexion/php/conexion.php';
function getCategoriasNav(){
    $conn = getConn();
    $query = "SELECT * FROM categoriaalmacen";
    $resultado = $conn->query($query);
    $categorias = "<li></li>";
    while ($row = $resultado->fetch_array(MYSQLI_ASSOC)){
        $imagen = base64_encode($row['imagen']);
        $categorias .="<li><a href='#'>$row[nombre]</a></li>";

    }
    return $categorias;
}
echo getCategoriasNav();
?>
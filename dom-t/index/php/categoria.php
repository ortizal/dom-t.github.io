<?php
require_once '../../conexion/php/conexion.php';
function getCategoriasindex(){
    $conn = getConn();
    $query = "SELECT * FROM categoriaalmacen";
    $resultado = $conn->query($query);
    $categorias = "<div></div>";
    while ($row = $resultado->fetch_array(MYSQLI_ASSOC)){
        $imagen = base64_encode($row['imagen']);
         //"<div class='categoria' >$row[nombre]</div>";  data:image/jpg;basse64,
        $categorias .="<div class='categoria col-lg'><a href='#'><img src='data:image/jpeg;base64,$imagen'></br>$row[nombre]</a></div>";

    }
    return $categorias;
}
echo getCategoriasindex();
?>
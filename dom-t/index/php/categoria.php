<?php
require_once '../../conexion/php/conexion.php';
function getCategoriasindex(){
    $conn = getConn();
    $query = "SELECT * FROM categoriaalmacen";
    $resultado = $conn->query($query);
    $categorias = "<div></div>";
    while ($row = $resultado->fetch_array(MYSQLI_ASSOC)){
        $imagen = base64_encode($row['imagen']);
        $categorias .="<div class = 'categoria' onclick = 'btnCategoria()' type='submit' value = $row[idtable1]><img src='data:image/jpeg;base64,$imagen' class = 'categoria'></br>$row[nombre]</div>";
    }
    return $categorias;
}
echo getCategoriasindex();
?>
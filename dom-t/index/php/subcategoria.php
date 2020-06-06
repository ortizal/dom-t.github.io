<?php
require_once '../../conexion/php/conexion.php';
function getSubCategorias(){
    $conn = getConn();
  /*   $id = $_POST['id'];
    WHERE categoriaAlmacen_idtable1 = $id" */
    $query = "SELECT * FROM subcategoria";
    $resultado = $conn->query($query);
    $subCategorias ="<div></div>";
    while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
        $subCategorias .="<div>$row[nombre]</div>";
    }
    return $subCategorias;
}
echo getSubCategorias();
?>


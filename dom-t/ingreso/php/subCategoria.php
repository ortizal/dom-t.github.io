<?php
    require_once '../../conexion/php/conexion.php';
    function getSubCategoria(){
        $conn = getConn();
        $id = $_POST['id'];
        $query = "SELECT * FROM subcategoria WHERE categoriaAlmacen_idtable1 = $id";
        $resultado = $conn->query($query);
        $subCategorias = '<option value="0">--Seleccione una opcion--</option>';
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $subCategorias .= "<option value='$row[idsubCategoria]'>$row[nombre]</option>";
        }
        return $subCategorias;
    }
    echo getSubCategoria();
?>

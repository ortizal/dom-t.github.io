<?php
    require_once '../../conexion/php/conexion.php';
    function getCategoria(){
        $conn = getConn();
        $query = 'SELECT * FROM categoriaalmacen';
        $resultado = $conn->query($query);
        $categorias = "<option value='0' >--Seleccione una opcion--</option>";
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $categorias .= "<option value='$row[idtable1]'>$row[nombre]</option>";
        }
        return $categorias;
    }
    echo getCategoria();
?>
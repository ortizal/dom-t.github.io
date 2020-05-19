<?php
    require_once '../../conexion/php/conexion.php';
    function getAlmacen(){
        $conn = getConn();
        $query = 'SELECT * FROM almacen';
        $resultado = $conn->query($query);
        $almacen = "<option value='0' >--Seleccione una opcion--</option>";
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $almacen .= "<option value='$row[idalmacen]'>$row[nombre]</option>";
        }
        return $almacen;
    }
    echo getAlmacen();
?>

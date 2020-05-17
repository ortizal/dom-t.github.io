<?php
    require_once '../../conexion/php/conexion.php';
    function getGerente(){
        $conn = getConn();
        $query = 'SELECT * FROM gerente';
        $resultado = $conn->query($query);
        $gerente = "<option value='0' >--Seleccione una opcion--</option>";
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $gerente .= "<option value='$row[idusuario]'>$row[nombres]</option>";
        }
        return $gerente;
    }
    echo getGerente();
?>

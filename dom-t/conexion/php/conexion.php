<?php
    function getConn(){
        $conexion=mysqli_connect("sql10.freesqldatabase.com","sql10340705","4UWmtv6RC6","sql10340705");
        $conexion->set_charset ('utf8');
        return $conexion;
    }
?>
<?php
    function getConn(){
        $conexion=mysqli_connect("sql10.freesqldatabase.com","sql10340744","B2MjYZJbhZ","sql10340744");
        $conexion->set_charset ('utf8');
        return $conexion;
    }
?>
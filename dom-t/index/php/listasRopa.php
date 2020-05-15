<?php 
    require_once '../../conexion/php/conexion.php';
    function get_listasRopa(){
        $conn = getConn();   
        $query = 'SELECT * FROM ropa';
        $resultado = $conn->query($query);
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            echo "<p>$row[nombre]</p></br>";
        }
    }
    echo get_listasRopa();
?>
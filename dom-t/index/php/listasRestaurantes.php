<?php 
    require_once '../../conexion/php/conexion.php';
    function get_listasRestaurante(){
        $conn = getConn();   
        $query = 'SELECT * FROM restaurante';
        $resultado = $conn->query($query);
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
           echo "<p>$row[nombre]</p></br>";
        }    
    }
    
?>
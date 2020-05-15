<table>
    <tr>
        <th>TELEFONO</th>
        <th>TELEFONO</th>
    </tr>
<?php 
    require_once '../../conexion/php/conexion.php';
    function get_listasRopa(){
        $conn = getConn();   
        $query = 'SELECT * FROM ropa';
        $resultado = $conn->query($query);
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $ropa = "$row[nombre]";
            $telefono = "$row[telefono]";
            ?>
            <tr>
            <tr>
                <td><?php echo $ropa?></td>
                <td><?php echo $telefono?></td>
            </tr>
            <?php
        }
    }
    echo get_listasRopa();
?>
</table>
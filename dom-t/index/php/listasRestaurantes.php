<table>
<tr>
    <th>NOMBRE</th>
</tr>
    <?php 
    require_once '../../conexion/php/conexion.php';
    function get_listasRestaurante(){
        $conn = getConn();   
        $query = 'SELECT * FROM restaurante';
        $resultado = $conn->query($query);
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $restaurante = "<p>$row[nombre]</p></br>";
            ?>
            <tr>
                <td><?php echo $restaurante?></td>
            </tr>
            <?php
        }    
    }
    echo get_listasRestaurante();
    ?>
</table>
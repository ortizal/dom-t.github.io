<table class = "table table-bordered">
<tr>
    <th>NOMBRE</th>
    <th>TELEFONO</th>
</tr>
    <?php 
    require_once '../../conexion/php/conexion.php';
    function get_listasRestaurante(){
        $conn = getConn();   
        $query = 'SELECT * FROM restaurante';
        $resultado = $conn->query($query);
        while ( $row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $restaurante = "$row[nombre]";
            $telefono = "$row[telefono]";
            ?>
            <tr>
                <td><?php echo $restaurante?></td>
                <td><?php echo $telefono?></td>
            </tr>
            <?php
        }    
    }
    echo get_listasRestaurante();
    ?>
</table>
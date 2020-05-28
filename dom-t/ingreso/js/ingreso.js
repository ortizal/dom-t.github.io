$(document).ready(function(){
    /* Cargar Categoria */
    $.ajax({
        type: 'POST',
        url: '../php/categoria.php'
    })
    .done(function(categoria){
        $('#listCategoria').html(categoria);
    })
    .fail(function(){
        alert('Error en cargar las listas');
    });
    /* Cargar SubCategoria */
    $('#listCategoria').on('change', function(){
        var id = $('#listCategoria').val();
        $.ajax({
            type: 'POST',
            url: '../php/subCategoria.php',
            data: {'id':id}
        })
        .done(function(categoria){
            $('#listSubCategoria').html(categoria);
        })
        .fail(function(){
            alert('Error en cargar las listas');
        });
    });
    /* Enviar Restaurante */
    $('#enviar').click(function(){
        var formulario = $('#formCategoria').serialize();
        $.ajax({
            type:'POST',
            url:'../php/envio.php',
            data: formulario,
            success:function(r){
                if (r == 1){
                    setTimeout("location.href='../html/ingresoImagenes.html'");
                    alert ("Agregado con exito");
                }else {
                    alert ("Error en la carga de archivos");
                }
            }
        });
        return false;
    });
    /* Cargar Almacen en Pagina de cargar imagenes */
    $.ajax({
        type: 'POST',
        url: '../php/almacen.php'
    })
    .done(function(almacen){
        $('#listAlmacen').html(almacen);
    })
    .fail(function(){
        alert('Error en cargar las listas');
    });
    $("#enviarImagen").click(function(){
        var frmData = new FormData($('#formImagenes')[0]);
        /* frmData.append("imagen",$()) */
        $.ajax({
            type:'POST',
            url:'../php/envioImagenes.php',
            data:frmData,
            processData:false,
            contentType: false,
            cache: false,
            beforesend: function(){

            },
            success: function(response){
                    alert("Imagen cargada");
            }
        })
        return false;
    });
});
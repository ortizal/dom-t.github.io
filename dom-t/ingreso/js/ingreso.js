$(document).ready(function(){
    /* Cargar y enviar Categoria */
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
    $('#enviar').click(function(){
        var formulario = $('#formCategoria').serialize();
        $.ajax({
            type:'POST',
            url:'../php/envio.php',
            data: formulario,
            success:function(r){
                if (r == 1){
                    location.href('ingresoImagenes.html');
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
    $('#enviarImagen').click(function(){
        var formulario = $('#formImagenes').serialize();
        alert (formulario);
        $.ajax({
            type:'POST',
            url:'../php/envioImagenes.php',
            data: formulario,
            success:function(r){
                if (r == 1){
                    alert ("Imagen Agregada con exito");
                }else {
                    alert ("Error en la carga de archivos");
                }
            }
        });
        return false;
    });
});
$(document).ready(function(){
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
    $.ajax({
        type: 'POST',
        url: '../php/gerente.php'
    })
    .done(function(categoria){
        $('#listGerente').html(categoria);
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
                    alert ("Agregado con exitos");
                }else {
                    alert ("Error en la carga de archivos");
                }
            }
        });
        return false;
    });
});
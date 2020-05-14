$('#restaurante').click(function(){
    $.ajax({
        type:'POST',
        url:'../php/listasRestaurantes.php'             
    })
    .done(function(lista){
        setTimeout("location.href='../../catalogo/html/catalogo.html'");
        $('#listado').html(lista);
    })
    .fail(function(){
        alert('Error en cargar las listas');
    })
    return false;
});
$('#almacenRopa').click(function(){
    $.ajax({
        type:'POST',
        url:'../php/listasRopa.php'             
    })
    .done(function(lista){
        setTimeout("location.href='../../catalogo/html/catalogo.html'");
        //$('#listado').html(lista);
    })
    .fail(function(){
        alert('Error en cargar las listas');
    })
    return false;
});
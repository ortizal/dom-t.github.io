$(document).ready(function(){
    localStorage.clear();
    $formulario = $('#indexFormulario').serialize();
    $.ajax ({
        type: 'POST',
        url:'../php/categoria.php',
        success:function(r){
           $('#seccion').html(r);
        }

    });
    $.ajax ({
        type: 'POST',
        url:'../php/categoriaNav.php',
        success:function(re){
           $('#catalogoNav').html(re);
        }

    });

});
$('#restaurante').click(function(){
    $.ajax({
        type:'POST',
        url:'../php/listasRestaurantes.php'             
    })
    .done(function(restaurante){
        localStorage.setItem('restaurante', restaurante);
        setTimeout("location.href='../../catalogo/html/catalogo.html'");
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
    .done(function(ropa){
        localStorage.setItem('ropa', ropa);
        setTimeout("location.href='../../catalogo/html/catalogo.html'");
    })
    .fail(function(){
        alert('Error en cargar las listas');
    })
    
    return false;
});
$('#computadoras').click(function(){
    $.ajax({
        type:'POST',
        url:'../php/almacenComputadoras.php'             
    })
    .done(function(computadoras){
        localStorage.setItem('computadoras', computadoras);
        setTimeout("location.href='../../catalogo/html/catalogo.html'");
    })
    .fail(function(){
        alert('Error en cargar las listas');
    })
    return false;
});
$(document).ready(function(){
    localStorage.clear();
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
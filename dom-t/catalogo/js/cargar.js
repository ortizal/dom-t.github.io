$(document).ready(function(){
  $.ajax({
    type:'POST',
    url:'../php/listarRestaurante.php'             
})
.done(function(lista){
    $('#listado').html(lista);
})
.fail(function(){
    alert('Error en cargar las listas');
})
return false;
});


$(document).ready(function(){
$.ajax({
  type:'POST',
  url:'../php/listarRopa.php'             
})
.done(function(lista){
  $('#listado').html(lista);
})
.fail(function(){
  alert('Error en cargar las listas');
})
return false;
});

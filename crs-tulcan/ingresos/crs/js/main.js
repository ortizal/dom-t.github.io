$(document).ready(function(){
    $.ajax({
        type:'POST',
        url:'../php/indexCrs.php'
    })
    .done(function(pplData){
        $('#listNacionalidades').html(pplData);
    })
    .fail(function(){
        alert("Error en la carga de nacionalidades");
    });
    $.ajax({
        type:'POST',
        url:'../php/detenidos.php'
    })
    .done(function(ingresoData){
        $('#listDetenidos').html(ingresoData);
    })
    .fail(function(){
        alert("Error en la carga de detenidos");
    });
});
$('#insPplData').click(function(){
    var pplForm = $('#pplData').serialize();
  $.ajax({
      type:'POST',
      url:'../php/envioPpldatos.php',
      data:pplForm,
      success: function(r){
          if (r == 1){
              alert("Datos Ingresados");
              /* setTimeout("location.href = 'index.html'"); */
          }
          else{
              alert("Error en la carga de archivos");
          }
      },
  });
  return false;
})
$(document).ready(function(){
    localStorage.clear();
    //$formulario = $('#indexFormulario').serialize();
    $.ajax ({
        type: 'POST',
        url:'../php/categoria.php'
    })
    .done(function(r){
        $('#seccion').html(r);
    })
    .fail(function(){
        alert('Error en carga');
    })
    $('#seccion').on('change', function(){
        
        var id = $('#seccion').val();
        consolelog(id);
    })
    $.ajax ({
        type: 'POST',
        url:'../php/categoriaNav.php',
        success:function(re){
           $('#catalogoNav').html(re);
        }
    });
});

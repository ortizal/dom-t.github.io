$(document).ready(function(){
    localStorage.clear();
    //$formulario = $('#indexFormulario').serialize();
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
/*     $('#seccion').on('change',function(){
        alert("me diste un toque");
      
        var id = $('#seccion').val(); */
        $.ajax ({
            type: 'POST',
            url:'../php/subcategoria.php',
          /*   data:{'id':id}, */
            success:function(r){
                $('#article').html(r);
            }
        });
 /*    }); */
});
     function categ(){
        var id = $('.categoria').val();
        alert (id);
     }
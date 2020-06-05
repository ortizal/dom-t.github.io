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
    $.ajax ({
        type: 'POST',
        url:'../php/subcategoria.php',
        success:function(sub){
           $('#article').html(sub);
        }
    });
});
/* function imgCategoria(){
    let valueCat = parseInt(document.getElementsByClassName('categoria')).value;
    console.log(valueCat);
} */


/* function btn_categoria(){
    var id = $('.categoria').val();    
    alert (id);
    return false;
   $.ajax({
       type:'POST',
       url:'../php/btn-categoria.php',
       data:formulario             
   })
   .done(function(subCategoria){
       alert(formulario);
      // localStorage.setItem('restaurante', restaurante);
       //setTimeout("location.href='../../catalogo/html/catalogo.html'");
       $('#article').html(subCategoria);
    })
   .fail(function(){
       alert('Error en cargar las listas');
   })
   return false;
} */
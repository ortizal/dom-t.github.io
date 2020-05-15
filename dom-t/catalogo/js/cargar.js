if (localStorage.getItem('restaurante')){
  $('#listado').html(localStorage.getItem('restaurante'));
} else if (localStorage.getItem('ropa')){
  $('#listado').html(localStorage.getItem('ropa'));
} 


//Iniciamos array de libros
var librosBiblioteca = [];


function Libro(titulo, autor, isbn, generos){
	this.titulo = titulo;
	this.autor = autor;
	this.isbn = isbn;
	this.generos = generos;
}


function crearLibroBiblioteca(libroCreado){
	var libroExiste = false;
	$('#lista-disponible li').each(function(){
		if ($(this).html() == libroCreado.titulo) {
			libroExiste = true;
		}
		// le quita la class creado al libro anterior, siempre y cuando se haya introducido un libro
		if($(this).hasClass('creado')){
				$(this).removeClass('creado');
			}
	});

		if(libroExiste){
			alert('El libro ' + libroCreado.titulo + " existe.");
		}else{
			$('#lista-disponible').append('<li id="libros" class="creado">'+libroCreado.titulo+'</li>');
				librosBiblioteca.push(libroCreado);
				$('#formCrear')[0].reset();
		}
}



function prestarLibroBiblioteca(libro){
	var esPrestado = false;
	$('#lista-prestado li').each(function(){
		if($(this).html() == libro.titulo){
			esPrestado = true;
		}
	});
	if(esPrestado){
		alert('El libro ' + libro.titulo + ' esta prestado' );
	}else{
		$('#lista-prestado').append('<li id="libros" class="prestados">'+libro.titulo+'</li>');
		$('#lista-disponible .seleccionado').remove();


		$('#formConsultar')[0].reset();
		var vaciarGeneros = document.getElementById('generos-consulta');
		while(vaciarGeneros.hasChildNodes()){
			vaciarGeneros.removeChild(vaciarGeneros.lastChild);
		}
	}
}

function devolverLibroBiblioteca(libro){
	var esPrestado = false;
	$('#lista-disponible li').each(function(){
		if($(this).html() == libro.titulo){
			esPrestado = true;
		}
	});
	if(esPrestado){
		alert('El libro ' + libro.titulo + ' esta prestado' );
	}else{
		$('#lista-disponible').append('<li id="libros" class="devuelto">'+libro.titulo+'</li>');
		$('#lista-prestado .seleccionado').remove();


		$('#formConsultar')[0].reset();
		var vaciarGeneros = document.getElementById('generos-consulta');
		while(vaciarGeneros.hasChildNodes()){
			vaciarGeneros.removeChild(vaciarGeneros.lastChild);
		}
	}
}

$(document).ready(function(){

	$('#lista-disponible').on('click', 'li', function(){
		for (var i = 0; i < librosBiblioteca.length; i++) {
			if ($(this).html() == librosBiblioteca[i].titulo) {
				var libroSeleccionado = librosBiblioteca[i];
				var consultarLibro = document.getElementById('formConsultar');
					$(this).removeClass('creado');
					$(this).addClass('seleccionado');
					consultarLibro.elements[0].value = libroSeleccionado.titulo;
					consultarLibro.elements[1].value = libroSeleccionado.autor;
					consultarLibro.elements[2].value = libroSeleccionado.isbn;
					$('#generos-consulta').html('');
					for(var i = 0; i < libroSeleccionado.generos.length; i++){
						$('#generos-consulta').append(libroSeleccionado.generos[i]+ ' | ');
					}

			}
		}
	});

	$('#lista-prestado').on('click', 'li', function(){
		for (var i = 0; i < librosBiblioteca.length; i++) {
			if($(this).html() == librosBiblioteca[i].titulo){
				var libroSeleccionado = librosBiblioteca[i];
				var consultarLibro = document.getElementById('formConsultar');
					$(this).removeClass('prestados');
					$(this).addClass('seleccionado');
					consultarLibro.elements[0].value = libroSeleccionado.titulo;
					consultarLibro.elements[1].value = libroSeleccionado.autor;
					consultarLibro.elements[2].value = libroSeleccionado.isbn;
					$('#generos-consulta').html('');
					for (var i = 0; i < libroSeleccionado.generos.length; i++) {
						$('#generos-consulta').append(libroSeleccionado.generos[i]+ ' | ');
					}

			}
		}
	});


	$('#aNL').click(function(){
		var formCrear = document.getElementById('formCrear');
		var tituloLibro = formCrear.elements[0].value;
		var autorLibro = formCrear.elements[1].value;
		var isbnLibro = formCrear.elements[2].value;
		var generosLibro = [];

		$('#checkboxes input').each(function(){
      if($(this).prop('checked')){
        generosLibro.push($(this).val());
      }
    });
		var libroCreado = new Libro(tituloLibro,autorLibro,isbnLibro,generosLibro);
		crearLibroBiblioteca(libroCreado);
	})

	$('#btnPrestar').click(function(){
		var prestamoLibro = document.getElementById('formConsultar');
		 var tituloLibro = prestamoLibro.elements[0].value;
   			for(var i = 0; i < librosBiblioteca.length; i++){
   				if(tituloLibro == librosBiblioteca[i].titulo ){
   					prestarLibroBiblioteca(librosBiblioteca[i]);
   				}
   			}
	})

	$('#btnDevolver').click(function(){
		var prestamoLibro = document.getElementById('formConsultar');
		 var tituloLibro = prestamoLibro.elements[0].value;
   			for(var i = 0; i < librosBiblioteca.length; i++){
   				if(tituloLibro == librosBiblioteca[i].titulo ){
   					devolverLibroBiblioteca(librosBiblioteca[i]);
   				}
   			}
	})
});

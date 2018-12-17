$(document).ready(function(){
	$('#formCrear').validate({
		rules: {
			titulo:{
				required: true
			},
			autor:{
				required: true
			},
			isbn:{
				required: true,
				number: true
			},
			generos:{
				required: true
			}
		},
		messages: {
			titulo: {
				required:"Introduce el titulo del libro."
			},
			autor:{
				required:"Introduce el autor del libro."
			},
			isbn: {
				required:"Introduce el ISBN del libro.",
				number: "Introduce solo numeros"
			},
			generos: {
				required: "Selecciona uno o mas géneros"
			}
		}
	});



	/*$('#formCrear').bind('change keyup', function() {
		 $('#aNL').attr('disabled', true);
	    if($(this).validate().checkForm()) {

	        $('#aNL').attr('disabled', false);

	    } else {

	        $('#aNL').attr('disabled', true);

	    }

		});*/


	$('#formConsultar').validate({
		rules: {
			mail:{
				required: true,
				email: true
			}
		},
		messages: {
			mail: {
				required:"Introduce tu email.",
				email: "Introduce un email valido"
			}
		}
	});
	/*$('#formConsultar').bind('change keyup', function() {

	    if($(this).validate().checkForm()) {

	        $('#btnPrestar').attr('disabled', false);
					$('#btnDevolver').attr('disabled', false);

	    } else {

	        $('#btnPrestar').attr('disabled', true);
					$('#btnDevolver').attr('disabled', true);

	    }

	});*/

});

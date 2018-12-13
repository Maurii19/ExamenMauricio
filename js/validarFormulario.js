$(document).ready(function(){
	$('#formCrear').validate({
		rules: {
			titulo:{
				required: true,
				minlength: 2
			},

			autor:{
				required: true,
				minlength: 4
			},
			isbn:{
				required: true,
				number: true,
				notEqual: 0
			}
		},
		messages: {
			titulo: "Introduce el titulo del libro.",
			autor: "Introduce el autor del libro.",
			isbn: "Introduce el ISBN del libro."
		}
	})
});
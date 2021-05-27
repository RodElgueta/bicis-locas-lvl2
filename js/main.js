function validateForm(){
	/* Escribe tú código aquí */
	const name = $('#name').val().trim();
	
	$('#name').parent().find('span').remove();
	if (name == '') {
		$('#name').parent().append('<span> Nombre no puede estar vacio</span>')
	}
	else if (/^[a-zA-Z]+$/.test(name) == false){
		$('#name').parent().append('<span> Nombre deben ser solo letras</span>')
	}
	else if (name[0].toUpperCase() != name[0]){
		$('#name').parent().append('<span> Primera letras debe ser mayuscula</span>')
	}

	const lastname = $('#lastname').val().trim();
	$('#lastname').parent().find('span').remove();
	if (lastname == ''){
		$('#lastname').parent().append('<span> Apellido no puede estar vacio</span>')
	}
	else if (/^[a-zA-Z]+$/.test(lastname) == false){
		$('#lastname').parent().append('<span> Apellido deben ser solo letras</span>')
	}
	else if (lastname[0].toUpperCase() != lastname[0]){
		$('#lastname').parent().append('<span> Primera letras debe ser mayuscula</span>')
	}
	
	const inputmail = $('#input-email').val().trim();
	$('#input-email').parent().find('span').remove();
	if (inputmail == ''){
		$('#input-email').parent().append('<span> Email no puede estar vacio</span>')
	}
	else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputmail) == false){
		$('#input-email').parent().append('<span> Email invalido</span>')
	}

	const inputpass = $('#input-password').val().trim();
	$('#input-password').parent().find('span').remove();
	if (inputpass == ''){
		$('#input-password').parent().append('<span> Password no puede estar vacio</span>')
	}
	
	else if (inputpass.length > 0 && inputpass.length < 5){
		$('#input-password').parent().append('<span> Password debe contener mas de  6 caracteres</span>')
	}
	else if (inputpass == '123456' || inputpass == '098754' || inputpass == 'password'){
		$('#input-password').parent().append('<span> Password no puede ser 123456, 098765 o password </span>')
	};

	const bici = $('select').val()
	
	$('select').children().find('span').remove();
	if (bici == 0){
		$('select').parent().append('<span> Debes seleccionar un tipo de bicicleta</span>')
	}

	


}
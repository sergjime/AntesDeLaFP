function validar_formulario(formulario){
//Validar nombre	
	if(formulario.nombre.value.length==0){
		alert("El nombre es obligatorio");
		formulario.nombre.focus();
		return false;
	}else if (isNaN(formulario.nombre.value)){
		alert("Tu nombre es "+formulario.nombre.value);
	}else{
		alert("No puedes introducir números en el nombre");
		formulario.nombre.focus();
		return false;
	}
//Validar apellidos
	if(formulario.apellidos.value.length==0){
		alert("Los apellidos son obligatorios");
		formulario.apellidos.focus();
		return false;
	}else if (isNaN(formulario.apellidos.value)){
		alert("Tus apellidos es "+formulario.apellidos.value);
	}else{
		alert("No puedes introducir números en los apellidos");
		formulario.nombre.focus();
		return false;
	}
//Validar email
	var arroba=formulario.email.value.indexOf("@");
	var punto=formulario.email.value.lastIndexOf(".");
	
	if(formulario.email.value.length==0){
		alert("El email es obligatorio");
		formulario.email.focus();
		return false;
	}else if (arroba<1||punto-arroba<2) {
		alert("El formato del email no es correcto");
		formulario.email.focus();
		return false;
	}
	else {
		alert("Tu email es "+formulario.email.value);
		}
//Validar teléfono
	if(formulario.telefono.value.length==0){
		alert("El teléfono es obligatorio");
		formulario.telefono.focus();
		return false;
	}else if (isNaN(formulario.telefono.value) || (formulario.telefono.value.length!=9)){
		alert("El teléfono ha de ser un número de 9 dígitos");
		formulario.telefono.focus();
		return false;
	}else{
		alert("Tu número de teléfono es "+formulario.telefono.value);
	}
//Validar fecha de nacimiento
	var fecha = formulario.fecha.value;
	var ano = fecha.substring(fecha.lastIndexOf("/")+1,fecha.length);
	var mes = fecha.substring(fecha.indexOf("/")+1,fecha.lastIndexOf("/"));
	var dia = fecha.substring(0,fecha.indexOf("/"));
	var fecha_posicion = fecha.split();
	var fecha_barra = fecha.indexOf("/");

	if(formulario.fecha.value.length==0){
		alert("La fecha de nacimiento es obligatoria");
		formulario.fecha.focus();
		return false;
	}
	if (isNaN(ano) || ano.length<4 || parseInt(ano)<1900){
		alert("El formato de la fecha de nacimiento no es correcta");
		formulario.fecha.focus();
		return false;
	}
	if (isNaN(mes) || parseInt(mes)<1 || parseInt(mes)>12){
		alert("El formato de la fecha de nacimiento no es correcta");
		formulario.fecha.focus();
		return false;
	}
	if (isNaN(dia) || parseInt(dia, 10)<1 || parseInt(dia, 10)>31){
		alert("El formato de la fecha de nacimiento no es correcta");
		formulario.fecha.focus();
		return false;
	}
	if (mes==4 || mes==6 || mes==9 || mes==11 || mes==2){
		if (mes==2 && dia > 28 || dia>30){
			alert("El formato de la fecha de nacimiento no es correcta");
			formulario.fecha.focus();
			return false;
		}
	}
	else{
		alert("Tu fecha de nacimiento "+formulario.fecha.value);
	}
}
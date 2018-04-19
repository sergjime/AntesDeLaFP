function validar_formulario(formulario){
	var pass = formulario.pass.value;
	var confpass = formulario.confpass.value;
	
	if(formulario.pass.value.length==0){
		alert("La contraseña es obligatoria");
		formulario.pass.focus();
		return false;
	}else if(pass.length<8){
		alert("Debes introducir como mínimo 8 carácteres");
		formulario.pass.focus();
		return false;
	}
	
	if(confpass!=pass){
		alert("El campo confirmar contraseña debe coincidir con la contraseña");
		formulario.confpass.focus();
		return false;
	}else{
		return true;
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
		return true;
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
		return true;
	}
}
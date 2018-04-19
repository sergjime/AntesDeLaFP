function validar_formulario(formulario){
	var pass = formulario.pass.value;
	var confpass = formulario.confpass.value;
	
	if(formulario.pass.value.length==0){
		alert("La contrase�a es obligatoria");
		formulario.pass.focus();
		return false;
	}else if(pass.length<8){
		alert("Debes introducir como m�nimo 8 car�cteres");
		formulario.pass.focus();
		return false;
	}
	
	if(confpass!=pass){
		alert("El campo confirmar contrase�a debe coincidir con la contrase�a");
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
//Validar tel�fono
	if(formulario.telefono.value.length==0){
		alert("El tel�fono es obligatorio");
		formulario.telefono.focus();
		return false;
	}else if (isNaN(formulario.telefono.value) || (formulario.telefono.value.length!=9)){
		alert("El tel�fono ha de ser un n�mero de 9 d�gitos");
		formulario.telefono.focus();
		return false;
	}else{
		return true;
	}
}
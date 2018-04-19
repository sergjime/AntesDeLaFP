function validar_obligatorio(campo,alerta)
{
  if (campo.value==null||campo.value=="")
    {
    alert(alerta);return false;
    }
  else{return true;}
}

function validar_email(campo,alerta)
{
  arroba=campo.value.indexOf("@");
  punto=campo.value.lastIndexOf(".");
  if (arroba<1||punto-arroba<2)
    {alert(alerta);return false;}
  else {return true;}
}

function validar_fecha(campo,alerta){  
     var fecha = campo.value;

     var ano = fecha.substring(fecha.lastIndexOf("/")+1,fecha.length);
     var mes = fecha.substring(fecha.indexOf("/")+1,fecha.lastIndexOf("/"));   
     var dia = fecha.substring(0,fecha.indexOf("/"));

    if (isNaN(ano) || ano.length<4 || parseInt(ano)<1900){alert(alerta);return false;} 
	if (isNaN(mes) || parseInt(mes)<1 || parseInt(mes)>12){alert(alerta);return false;} 
	if (isNaN(dia) || parseInt(dia)<1 || parseInt(dia)>31){alert(alerta);return false;} 
	if (mes==4 || mes==6 || mes==9 || mes==11 || mes==2) {  
		if (mes==2 && dia > 28 || dia>30) {alert(alerta);return false;}
	}
}

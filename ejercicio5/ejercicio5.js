function validarform(){
    var nombre = document.validar.nombre.value;
    
    if(nombre.length == 0){
        alert("Introduce tu nombre");
        return 0;
    }
    
    var edad = document.validar.edad.value; //debe ser mayor de 18

    if(isNaN(edad)){
        alert("La edad debe ser un número entero");
        return 0;
    }
    else if(edad < 18){
        alert("Debe ser mayor de edad");
        return 0;
    }

    var interes = document.validar.interes.selectedIndex; //no puede ser 0

    if(interes == 0){
        alert("Seleccione un motivo de contacto");
    }

    if(interes == 0){
        interes.focus();
    }
    if(edad == "" | edad < 18){
        document.validar.edad.focus();
    }
    if(nombre.length == 0){
        document.validar.nombre.focus();
    }
}
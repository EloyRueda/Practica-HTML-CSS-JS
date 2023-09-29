function validarform(){
    var correcto = true; 

    var nombre = document.getElementById("nombre").value;
    if(nombre.length == 0){
        alert("Introduzca su nombre");
        correcto = false;
    }
    
    var edad = document.getElementById("edad").value; //debe ser mayor de 18
    if(isNaN(edad)){
        alert("La edad debe ser un número entero");
        correcto = false;
    }
    else if(edad < 18){
        alert("Debe ser mayor de edad");
        correcto = false;
    }

    //declarar expresión regular para validar el formato del correo electrónico
    var expresion_correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    var correo = document.getElementById("correo").value;
    //comprobar que la expresión del correo es correcta
    if(!expresion_correo.test(correo)){
        alert("Introduzca un correo electrónico válido")
        correcto = false;
    }


    var interes = document.getElementById("interes").selectedIndex; //no puede ser 0
    if(interes == 0){
        alert("Seleccione un motivo de contacto");
        correcto = false;
    }

    if(correcto == true){
        alert("Los datos son correctos y se enviarán al servidor");
    }
    else{
        if(nombre.length == 0){
            document.getElementById("nombre").focus();
        }
        else if(edad == "" | edad < 18){
            document.getElementById("edad").focus();
        }
        else if(!expresion_correo.test(correo)){
            document.getElementById("correo").focus();
        }
        else if(interes == 0){
            document.getElementById("interes").focus();
        }
    }
}
var num = parseFloat(prompt("Introduce un número:"));
var resultado = "<tr><th>MULTIPLICACIÓN</th><th>RESULTADO</th></tr>";

for(var i = 0; i <= 10; i++){
    resultado += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>"; //Añadir el reultado la indicación y el resultado de la multiplicación
}

document.getElementById("tabla").innerHTML = resultado; //Añadir al HTML el contenido de resultado
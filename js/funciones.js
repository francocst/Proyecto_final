

document.getElementById("boton_inicio").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hola, me llamo "+nombre;
});

document.getElementById("boton_correo").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Mi correo es "+correo;
});

document.getElementById("boton_cumpleaños").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Mi cumpleaños es: "+cumpleaños;
});

document.getElementById("boton_direccion").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Mi direccion es: "+direccion;
});

document.getElementById("boton_telefono").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Mi telefono es: "+telefono;
})

document.getElementById("boton_estudios").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = estudios;
});

let nombre = "Darlene Martin";
let correo = "darlene.martin@example.com"
let cumpleaños = "4/5/1992"
let direccion = "2790 Flor Colina Rd"
let telefono = "(655) 384-3095"
let estudios = "Secundario completo, Tecnico electromecánico y programador"
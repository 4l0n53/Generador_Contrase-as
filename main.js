let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonlimpiar= document.getElementById("contraseña");
let message= document.getElementById("message")

const cadenaCaracteres = "ABCDEFGHIJKRLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);
    const campoContrasena = contrasena.value; 

    if (isNaN(numeroDigitado)||numeroDigitado==0){
        alert("Debe ingresar un valor valido");
      

    }
    //else if(numeroDigitado <= 6){
       // alert("El Valor ingresado debe ser mayor a 6");
   // }
    else if(numeroDigitado>15){
        alert("El valor ingresado debe ser menor a 15");
    }
    
    else{ 
    let password = "";
    for (let i= 0; i < numeroDigitado; i++){

        let caracterAleatoreo = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password+=caracterAleatoreo;
  
    }

    contrasena.value = password;  


    let strength =0;

    if (campoContrasena.match(/[a-z]+/)){
        strength++;
    }
    if (campoContrasena.match(/[A-Z]+/)){
        strength++;
    }
    if (campoContrasena.match(/[0-9]+/)){
        strength++;
    }
    if (campoContrasena.match(/[!#$%&/*]+/)){
        strength++;
    }
    if (campoContrasena.length >=8){
        strength++;
    }
    switch (strength){
        case 1:
            message.textContent = "Muy Débil";
            message.style.color = "#ff0000";
            break
        case 2:
            message.textContent= "Débil";
            message.style.color= "ff6c00";
            break
        case 3:
            message.textContent = "Media";
            message.style.color = "#ffe000";  
            break   
        case 4:
            message.textContent = "Fuerte";
            message.style.color = "#20c500";  
            break  
        case 5:
            message.textContent = "Muy Fuerte";
            message.style.color = "#157e00";  
            break  
    }

}
}

function limpiar(){
    document.getElementById("contrasena").value=" ";
    document.getElementById("cantidad").value=" ";
    document.getElementById("message").innerHTML="";

}

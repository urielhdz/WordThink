document.addEventListener("DOMContentLoaded", function () {
    const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
    const btnRegistrarse = document.getElementById("btn__registrarse");
    const formularioLogin = document.querySelector(".formulario__login");
    const formularioRegister = document.querySelector(".formulario__register");

    btnIniciarSesion.addEventListener("click", function () {
        formularioLogin.style.display = "block";
        formularioRegister.style.display = "none";
        document.title = "Iniciar Sesión - MagtimusPro";
    });

    btnRegistrarse.addEventListener("click", function () {
        formularioLogin.style.display = "none";
        formularioRegister.style.display = "block";
        document.title = "Regístrate - MagtimusPro";
    });

    formularioLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const correo = formularioLogin.querySelector('input[type="text"]').value;
        const contraseña = formularioLogin.querySelector('input[type="password"]').value;

        // Aquí debes realizar la verificación de las credenciales en el servidor.
        // Este es solo un ejemplo en el lado del cliente.
        if (correo === "user@gmail.com" && contraseña === "password123") {
            alert("Inicio de sesión exitoso. Redirigiendo a la página de inicio.");
            window.location.href = "inicio1.html"; 
        } else {
            alert("Credenciales incorrectas. Intente de nuevo.");
        }
    });
});

//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
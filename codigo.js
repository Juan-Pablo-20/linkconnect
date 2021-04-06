const barra = document.querySelector(".barra");
const candado = document.querySelector(".candado");
const camaras = document.querySelector(".camaras");
const conexion = document.querySelector(".conexion");
const portatil = document.querySelector(".portatil");
const imagenes = document.querySelector(".imagenes");
const tam = document.querySelector(".tam")

const images = [candado, camaras, portatil, conexion]

setTimeout(() => {
    images[0].style.display = "none";
}, 5000);

let conta = 0;
setInterval(() => {
    images[conta].style.display = "block";
    images[conta].style.animation = "opacidad3 3s";
    imagenes.appendChild(images[conta]);
    if (conta == 3) {
        conta = 0;
    } else {
        conta++;
    }

}, 5000)

const texto = document.querySelector(".texto");
const enviar = document.querySelector(".enviar");
const link = document.querySelector(".chatLink");
const chatUser = document.querySelector(".chatUser");

enviar.addEventListener("click", () => {
    if(texto.value == "Hola LinkConnect" || texto.value == "hola"){
        chatUser.style.display = "block";
        chatUser.style.bottom = "65";
        chatUser.innerHTML = texto.value;
        texto.value = "";
        setTimeout(() => {
            link.style.display = "block";
            link.innerHTML = "Hola! ¿En que podemos ayudarte?"
            link.style.bottom = "65";
            chatUser.style.bottom = "120";
        }, 1000);
    } else {
        chatUser.style.display = "block";
        chatUser.style.bottom = "65";
        chatUser.innerHTML = texto.value;
        texto.value = "";
        setTimeout(() => {
            link.style.display = "block";
            link.innerHTML = "Hola! Soy en chat de LinkConnect"
            link.style.bottom = "65";
            chatUser.style.bottom = "120";
        }, 1000);
    }
})

var seMueve = false;
window.addEventListener("scroll", () => {
    if (window.scrollY > window.screen.height) {
        barra.style.animation = "opacidad1 1s";
        barra.style.backgroundColor = "rgba(54, 54, 54, 0.582)";
        seMueve = true;
    } else {
        if (seMueve) {
            barra.style.animation = "opacidad2 1s";
            barra.style.backgroundColor = "rgb(54, 54, 54)";
        }
    }
})

$(document).ready(function () {
    $(".ventanaChat").hide();
    $(".fondo").hide();
    $(".login").hide();

    $(".chat").click(() => {
        $(".chat").slideToggle();
        $(".ventanaChat").slideToggle();
    })
    $(".headChat").click(() => {
        $(".chat").slideToggle();
        $(".ventanaChat").slideToggle();
    })

    $(".abrir").click(() => {
        $(".fondo").fadeToggle();
        $(".login").toggle(400);
    })
})

const cerrar = document.querySelector(".cerrar");
const fondo = document.querySelector(".fondo");
const login = document.querySelector(".login");

cerrar.addEventListener("click", () => {
    fondo.style.display = "none";
    login.style.display = "none";
})

const user = document.querySelector(".usuario");
const pass = document.querySelector("#pass");
const ingreso = document.querySelector(".ingreso");

let pasa = false;
let pasaC = false;
ingreso.addEventListener("click", () => {
    if (user.value === "funcionario" && pass.value === "holamundo") {
        pasa = true;
    } else if (user.value === "cliente" && pass.value === "cliente") {
        pasaC = true;
    }
    if (pasa) {
        window.close();
        window.open("baseDatos.html")
    } else if (pasaC) {
        window.close();
        window.open("cliente.html")
    } else {
        alert("Datos incorrectos")
        event.preventDefault();
    }
})

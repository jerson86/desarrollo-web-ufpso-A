// FORMULARIO
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");
    const USER_DEFAULT = "prueba@gmail.com"
    const PASSWORD_DEFAULT = "123456"

    if (email === "" || password === "") {
        mensaje.innerHTML = "Todos los campos son obligatorios";
        mensaje.className = "text-warning";
    } else if (email === USER_DEFAULT || password === PASSWORD_DEFAULT){
        mensaje.innerHTML = "Bienvenido al sistema";
        mensaje.className = "text-success";
    }
    else {
        mensaje.innerHTML = "Error al procesar los datos";
        mensaje.className = "text-danger";
    }
});


// BOTONES DE CARDS → ABRIR MODAL
let botones = document.querySelectorAll(".btn-info");

botones.forEach(boton => {
    boton.addEventListener("click", function() {
        let modal = new bootstrap.Modal(document.getElementById("miModal"));
        modal.show();
    });
});
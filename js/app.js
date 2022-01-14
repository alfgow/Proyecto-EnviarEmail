//! Variables
let enviar = document.querySelector("#enviar");
let email = document.querySelector("#email");
let asunto = document.querySelector("#asunto");
let mensaje = document.querySelector("#mensaje");

//! Event Listener
addEventListeners();
function addEventListeners() {
	// Cuando la App arranca
	document.addEventListener("DOMContentLoaded", iniciarApp);

	// campos del formulario
	email.addEventListener("blur", validarMail);
}

//! Funciones

// Iniciando App
function iniciarApp() {
	enviar.disabled = "true";
}

// Validando Formulario
function validarMail(e) {
	if (e.target.value.length > 0) {
		console.log(e.target.value);
	} else {
		e.target.style.borderColor = "red";
		Swal.fire({
			icon: "error",
			title: "Error...",
			text: "Es necesario introducir un correo",
		});
	}
}

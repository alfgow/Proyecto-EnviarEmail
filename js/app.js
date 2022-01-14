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

	// Validamos que los ampos del formulario no esten vacios
	email.addEventListener("blur", validarCampos);
	asunto.addEventListener("blur", validarCampos);
	mensaje.addEventListener("blur", validarCampos);
}

//! Funciones

// Iniciando App
function iniciarApp() {
	enviar.disabled = "true";
}

// Validando Campos
function validarCampos(e) {
	if (e.target.value.length > 0) {
		e.target.style.borderColor = "green";
	} else {
		let tipoCampo = e.target.id;
		e.target.style.borderColor = "red";
		Swal.fire({
			icon: "error",
			title: "Error...",
			text: `Es necesario introducir un ${tipoCampo}`,
		});
	}
}

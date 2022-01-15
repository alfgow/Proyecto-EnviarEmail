//! Variables
let enviar = document.querySelector("#enviar");
let email = document.querySelector("#email");
let asunto = document.querySelector("#asunto");
let mensaje = document.querySelector("#mensaje");
let validarMail;

//! Event Listener
addEventListeners();
function addEventListeners() {
	// Cuando la App arranca
	document.addEventListener("DOMContentLoaded", iniciarApp);

	// Validamos que los ampos del formulario no esten vacios
	email.addEventListener("blur", validarCampos);
	asunto.addEventListener("blur", validarCampos);
	mensaje.addEventListener("blur", validarCampos);
	enviar.addEventListener("click", enviarFormulario);
}

//! Funciones

// Iniciando App
function iniciarApp(e) {
	enviar.disabled = "true";
}

// Validando Campos
function validarCampos(e) {
	const tipoDato = e.target.type;
	if (e.target.value.length > 0) {
		campoConValor(e);
		if (tipoDato === "email") {
			const er =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			const testMail = er.test(e.target.value);
			if (testMail) {
				validarMail = 1;
			} else {
				campoVacio(e);

				Swal.fire({
					icon: "error",
					title: "Error...",
					text: `El correo '${e.target.value}' es incorrecto`,
				});
			}
		}
	} else {
		campoVacio(e);
	}
	if (asunto.value !== "" && mensaje.value !== "" && validarMail === 1) {
		enviar.classList.remove("cursor-not-allowed", "opacity-50");
		enviar.removeAttribute("disabled");
	}
}

function campoConValor(e) {
	e.target.style.borderColor = "green";
}

function campoVacio(e) {
	let tipoCampo = e.target.id;
	e.target.style.borderColor = "red";
	Swal.fire({
		icon: "error",
		title: "Error...",
		text: `Es necesario introducir un ${tipoCampo}`,
	});
}

// Enviar email
function enviarFormulario(e) {
	e.preventDefault();
	Swal.fire({
		icon: "success",
		title: "Todo Perfecto",
		text: `Se ha enviado el correo`,
	});
	email.value = "";
	asunto.value = "";
	mensaje.value = "";
}

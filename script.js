console.log("Script cargado exitosamente");

/* ======================================
   CONTACTO.HTML
====================================== */

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const provincia = document.getElementById("provincia");
const codigoPostal = document.getElementById("codigoPostal");

const resumenNombre = document.getElementById("resumen-nombre");
const resumenApellido = document.getElementById("resumen-apellido");
const resumenEmail = document.getElementById("resumen-email");
const resumenTelefono = document.getElementById("resumen-telefono");
const resumenEdad = document.getElementById("resumen-edad");
const resumenDireccion = document.getElementById("resumen-direccion");
const resumenProvincia = document.getElementById("resumen-provincia");
const resumenCP = document.getElementById("resumen-cp");
const resumenContacto = document.getElementById("resumen-contacto");
const resumenSuscripciones = document.getElementById("resumen-suscripciones");

/* Verificamos que estamos en contacto.html */

if (nombre) {

    nombre.addEventListener("input", () => {
        resumenNombre.innerText = nombre.value;
    });

    apellido.addEventListener("input", () => {
        resumenApellido.innerText = apellido.value;
    });

    email.addEventListener("input", () => {
        resumenEmail.innerText = email.value;
    });

    telefono.addEventListener("input", () => {
        resumenTelefono.innerText = telefono.value;
    });

    direccion.addEventListener("input", () => {
        resumenDireccion.innerText = direccion.value;
    });

    codigoPostal.addEventListener("input", () => {
        resumenCP.innerText = codigoPostal.value;
    });

    provincia.addEventListener("change", () => {
        resumenProvincia.innerText = provincia.value;
    });

    edad.addEventListener("input", () => {

        const valorEdad = parseInt(edad.value);

        if (!isNaN(valorEdad) && valorEdad < 18) {

            resumenEdad.innerText =
                valorEdad + " (Menor de edad)";

            resumenEdad.style.backgroundColor = "#ffcccc";

        } else {

            resumenEdad.innerText = edad.value;
            resumenEdad.style.backgroundColor = "";
        }
    });

    /* Método de contacto */

    const radiosContacto =
        document.querySelectorAll('input[name="contacto"]');

    radiosContacto.forEach(radio => {

        radio.addEventListener("change", () => {

            if (radio.checked) {

                const texto =
                    radio.nextElementSibling.innerText;

                resumenContacto.innerText = texto;
            }
        });
    });

    /* Mostrar opción seleccionada por defecto */

    const contactoSeleccionado =
        document.querySelector('input[name="contacto"]:checked');

    if (contactoSeleccionado) {

        resumenContacto.innerText =
            contactoSeleccionado.nextElementSibling.innerText;
    }

    /* Suscripciones */

    const checkboxes =
        document.querySelectorAll('input[name="suscripcion"]');

    function actualizarSuscripciones() {

        const seleccionadas = [];

        checkboxes.forEach(check => {

            if (check.checked) {

                seleccionadas.push(
                    check.nextElementSibling.innerText
                );
            }
        });

        resumenSuscripciones.innerText =
            seleccionadas.join(", ");
    }

    checkboxes.forEach(check => {
        check.addEventListener(
            "change",
            actualizarSuscripciones
        );
    });

    actualizarSuscripciones();
}

/* ======================================
   ACERCADE.HTML
====================================== */

const btnLeerMas =
    document.getElementById(
        "btn-leer-mas-antinao-1377-40"
    );

const cvCompleto =
    document.querySelector(".cv-completo");

if (btnLeerMas && cvCompleto) {

    btnLeerMas.addEventListener("click", () => {

        if (
            cvCompleto.style.display === "none" ||
            cvCompleto.style.display === ""
        ) {

            cvCompleto.style.display = "block";
            btnLeerMas.innerText = "Leer menos";

        } else {

            cvCompleto.style.display = "none";
            btnLeerMas.innerText = "Leer más";
        }
    });
}
# REFLEXIÓN TP5 - Interactividad con JavaScript y Manipulación del DOM

## 1. Fragmento de código utilizado para validar la edad y aplicar estilos dinámicos

```javascript
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
```

## 2. ¿Por qué se utilizó el evento `input` en lugar de `change`?

Se utilizó el evento `input` porque se ejecuta inmediatamente cada vez que el usuario escribe, elimina o modifica un carácter dentro de un campo de entrada. Gracias a esto, la información puede mostrarse en la tabla de resumen en tiempo real, sin necesidad de que el usuario termine la edición.

Por otro lado, el evento `change` solo se ejecuta cuando el valor del control ha cambiado y el usuario abandona el campo o confirma la selección. Por esta razón, no resulta adecuado para actualizar datos de forma instantánea mientras el usuario está escribiendo.

## 3. ¿Cómo evitó errores al ejecutar código específico de una página en un archivo JavaScript común?

Para evitar errores de elementos inexistentes, antes de ejecutar el código se verificó que los elementos estuvieran presentes en la página utilizando estructuras condicionales.

Por ejemplo:

```javascript
if (nombre) {
    // Código correspondiente a contacto.html
}

if (btnLeerMas && cvCompleto) {
    // Código correspondiente a acercade.html
}
```

De esta manera, el mismo archivo `script.js` puede utilizarse en diferentes páginas del sitio sin producir errores de tipo "null" o "Cannot read properties of null" en la consola del navegador.
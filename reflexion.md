1. Indique el código HTML literal que utilizó para definir el campo del Código Postal con su correspondiente expresión de patrón (pattern) y atributo title.
    
    <div> 
        <label for="codigoPostal">Código Postal:</label>
        <input type="text" id="codigoPostal" name="codigoPostal" 
                pattern="^[A-Z]\d{4}[A-Z]{3}$" 
                title="Formato requerido: una letra mayúscula, cuatro dígitos y tres letras mayúsculas (ej: R8500AAF)">
    </div>

2. Explique para qué sirve la etiqueta <label> en los formularios y cómo se asocia correctamente a un campo de entrada mediante el atributo for.

    La etiqueta <label> sirve para describir el propósito de un campo en un formulario.

    Mejora la accesibilidad: los lectores de pantalla la leen para usuarios con discapacidad visual.

    También mejora la usabilidad: al hacer clic en el texto del <label>, el navegador activa automáticamente el campo asociado.

    El atributo for de <label> debe coincidir con el id del campo de entrada.

3. ¿Cómo se comportan los campos de selección circular (radio) cuando tienen diferentes atributos name vs. cuando comparten el mismo name?

    Los botones de selección circular (<input type="radio">) permiten elegir una sola opción dentro de un grupo.

    Cuando tienen diferente name cada botón se comporta como un grupo independiente y se pueden seleccionar varios a la vez, porque no están vinculados.
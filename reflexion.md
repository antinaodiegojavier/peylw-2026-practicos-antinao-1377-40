# reflexion

1. Fragmento CSS de la animación del logo CURZA

    ```css
    .logo-curza{
         width:80px;
        height:auto;
        transition:transform 1s ease-in-out;
    }

    .logo-curza:hover{
         transform:rotateY(360deg);
    }

2. ¿Por qué es necesario definir un background-color en un elemento sticky?

  Es necesario definir un color de fondo en un elemento con position: sticky para que, al desplazarse el contenido por detrás de él, el título permanezca visible y legible. Si no se define un background-color, el contenido que pasa por debajo puede verse a través del elemento adherente, generando una superposición visual que dificulta la lectura y da una apariencia desordenada a la página.

3. ¿Qué cambio visual ocurre en pantallas menores a 768px?

 Cuando el sitio se visualiza en una pantalla de tamaño celular (menor a 768px), el menú de navegación cambia de una disposición horizontal a una vertical gracias a las reglas @media. Además, la tabla puede desplazarse horizontalmente sin romper el diseño de la página y los elementos del formulario se adaptan al ancho disponible, mejorando la experiencia de uso en dispositivos móviles.
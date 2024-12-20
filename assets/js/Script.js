import { agregarBoxeador } from "./Promesas.js";

//Configura los eventos y las funcionalidades iniciales cuando la página se carga.
window.addEventListener("load", () => {
    console.log("hola");
    //Evento para registrar un nuevo boxeador cuando se presiona el botón "Registrar".
    document.getElementById("btnBoton").addEventListener("click", () => {
        // Recupero los elementos del formulario
        let eNombre = document.getElementById("Nombre");
        let eApellido = document.getElementById("Apellido");
        let eEdad = document.getElementById("Edad");

        let eMasculino = document.getElementById("masculino");
        let eFemenino = document.getElementById("femenino");

        let eCategoria = document.getElementById("Categoria");
        let eVictoria = document.getElementById("Victorias");
        let eDerrotas = document.getElementById("Derrotas");
        let eDescripcion = document.getElementById("Descripcion");

        // Recupero el contenido de los elementos del formulario
        let vNombre = eNombre.value.trim();
        let vApellido = eApellido.value.trim();
        let vEdad = eEdad.value.trim();
        let vGenero = "";

        // Determino el género basado en los radio buttons
        if (eMasculino.checked) {
            vGenero = "masculino"; // Si está marcado el radio "masculino", se asigna este valor
        } else if (eFemenino.checked) {
            vGenero = "femenino"; // Si está marcado el radio "femenino", se asigna este valor
        }

        let vCategoria = eCategoria.value.trim();
        let vVictorias = eVictoria.value.trim();
        let vDerrotas = eDerrotas.value.trim();
        let vDescripcion = eDescripcion.value.trim();

        // Validaciones
        let errores = []; // Creamos un array para almacenar los mensajes de error.

        // Validamos si el campo "Nombre" está vacío
        if (!vNombre) errores.push("El nombre es obligatorio.");
        
        // Validamos si el campo "Apellido" está vacío
        if (!vApellido) errores.push("El apellido es obligatorio.");
        
        // Validamos si el campo "Edad" tiene un valor y si es un número positivo
        // Si el valor de "Edad" es vacío o no es un número mayor que 0, añadimos un error
        if (!vEdad || vEdad <= 0) {
            errores.push("La edad debe ser un número positivo.");
        }
        
        // Validamos si el campo "Genero" está vacío
        if (!vGenero) errores.push("Debe seleccionar un género.");
        
        // Validamos si el campo "Categoria" está vacío
        if (!vCategoria) errores.push("La categoría es obligatoria.");
        
        // Validamos si el campo "Victorias" tiene un valor y si es un número no negativo
        // Si el valor de "Victorias" es vacío o menor que 0, añadimos un error
        if (vVictorias === "" || vVictorias < 0) {
            errores.push("Las victorias deben ser un número no negativo.");
        }
        
        // Validamos si el campo "Derrotas" tiene un valor y si es un número no negativo
        // Si el valor de "Derrotas" es vacío o menor que 0, añadimos un error
        if (vDerrotas === "" || vDerrotas < 0) {
            errores.push("Las derrotas deben ser un número no negativo.");
        }
        
        // Validamos si el campo "Descripcion" está vacío
        if (!vDescripcion) errores.push("La descripción es obligatoria.");
        
        // Si hay errores, mostramos una alerta con los mensajes de error
        if (errores.length > 0) {
            alert("Por favor, corrija los siguientes errores:\n" + errores.join("\n"));
            return; // Terminamos la ejecución si hay errores.
        }
        

        // Crear objeto un boxeador
        let boxeador = {
            Nombre: vNombre,
            Apellido: vApellido,
            Edad: parseInt(vEdad),
            Genero: vGenero,
            Categoria: vCategoria,
            Victorias: parseInt(vVictorias),
            Derrotas: parseInt(vDerrotas),
            Descripcion: vDescripcion,
        };

        // Llamo a la función para registrar el boxeador en la base de datos
        agregarBoxeador(boxeador);

        // Notificación de éxito
        alert("¡Se ha registrado con éxito!");
        console.log(boxeador); // Muestro los datos del boxeador registrado en la consola
    });

    //Evento para alternar los estilos del formulario entre dos clases CSS.
    document.getElementById("cambioColor").addEventListener("click", () => {
        console.log("hola");
        let elements = document.getElementsByClassName("formulario1");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            if (element.classList.contains("formulario1")) {
                // Si el elemento tiene la clase "formulario1", la cambia a "formulario2"
                element.classList.remove("formulario1");
                element.classList.add("formulario2");
            } else if (element.classList.contains("formulario2")) {
                // Si el elemento tiene la clase "formulario2", la cambia a "formulario1"
                element.classList.remove("formulario2");
                element.classList.add("formulario1");
            }
        }
    });

    //Evento para redirigir al usuario a la página de la tabla de boxeadores.
    document.getElementById("irTabla").addEventListener("click", () => {
        window.location.href = "/Tabla.html"; // Redirige a la página de la tabla
    });
});

import { actualizarBoxeador, obtenerBoxer } from "./Promesas.js";
//configura los eventos y funcionalidades iniciales al cargar la página.
window.addEventListener("load", () => {
    // Obtiene los parámetros de la URL para extraer el ID del boxeador.
    let valor = window.location.search;
    const urlParams = new URLSearchParams(valor);
    var id = urlParams.get("id");

    
    //Obtiene los datos del boxeador con el ID especificado y los carga en el formulario.
    obtenerBoxer(id).then((p) => {
        console.log(p);

        // Selecciona los elementos del formulario.
        let Nombre = document.getElementById("Nombre");
        let Apellido = document.getElementById("Apellido");
        let Edad = document.getElementById("Edad");
        let Categoria = document.getElementById("Categoria");
        let Victoria = document.getElementById("Victorias");
        let Derrotas = document.getElementById("Derrotas");
        let Descripcion = document.getElementById("Descripcion");

        // Rellena los campos del formulario con los datos del boxeador.
        Nombre.value = p.Nombre;
        Apellido.value = p.Apellido;
        Edad.value = p.Edad;
        Categoria.value = p.Categoria;
        Victoria.value = p.Victorias;
        Derrotas.value = p.Derrotas;
        Descripcion.value = p.Descripcion;
    });

    // Selecciona el botón de actualizar.
    let btnActualizar = document.getElementById("btnActualizar");

    
    //Asigna un evento para manejar la actualización del boxeador.
    btnActualizar.addEventListener("click", () => {
        console.log("Le diste al botón");

        // Selecciona los elementos del formulario.
        let eNombre = document.getElementById("Nombre");
        let eApellido = document.getElementById("Apellido");
        let eEdad = document.getElementById("Edad");
        let eMasculino = document.getElementById("masculino");
        let eFemenino = document.getElementById("femenino");
        let eCategoria = document.getElementById("Categoria");
        let eVictoria = document.getElementById("Victorias");
        let eDerrotas = document.getElementById("Derrotas");
        let eDescripcion = document.getElementById("Descripcion");

        // Recupera los valores de los campos del formulario.
        let vNombre = eNombre.value.trim();
        let vApellido = eApellido.value.trim();
        let vEdad = eEdad.value.trim();
        let vGenero = eMasculino.checked ? "masculino" : eFemenino.checked ? "femenino" : "";
        let vCategoria = eCategoria.value.trim();
        let vVictorias = eVictoria.value.trim();
        let vDerrotas = eDerrotas.value.trim();
        let vDescripcion = eDescripcion.value.trim();

        // Realiza las validaciones correspondientes.
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
        

        // Crea el objeto actualizado del boxeador.
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

        /**
         * Actualiza el boxeador llamando a la función `actualizarBoxeador` y maneja la respuesta.
         */
        actualizarBoxeador(id, boxeador)
            .then(() => {
                alert("¡Boxeador actualizado con éxito!");
            })
            .catch((error) => {
                alert("Hubo un error al actualizar el boxeador: " + error.message);
            });
    });

    /**
     * Asigna un evento para redirigir a la página de la tabla.
     */
    document.getElementById("irTabla").addEventListener("click", () => {
        window.location.href = "/Tabla.html";
    });

    /**
     * Cambia el estilo del formulario entre modo claro y oscuro.
     */
    document.getElementById("cambioColor").addEventListener("click", () => {
        console.log("Cambiando tema del formulario...");
        let elements = document.getElementsByClassName("formulario1");

        // Itera sobre los elementos para alternar entre las clases de estilo.
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            if (element.classList.contains("formulario1")) {
                element.classList.remove("formulario1");
                element.classList.add("formulario2");
            } else if (element.classList.contains("formulario2")) {
                element.classList.remove("formulario2");
                element.classList.add("formulario1");
            }
        }
    });
});

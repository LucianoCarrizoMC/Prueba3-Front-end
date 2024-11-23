import { eliminarboxeador, obtenerboxeadores } from "./Promesas.js";
//Configura los eventos y las funcionalidades iniciales al cargar la página.
window.addEventListener("load", () => {
    // Obtiene la lista de boxeadores usando una promesa.
    var boxeador = obtenerboxeadores();
    console.log(boxeador);

    // Selecciona la tabla donde se mostrarán los datos de los boxeadores.
    var tableit = document.getElementById("tablaaa");
    //Maneja la resolución de la promesa de `obtenerboxeadores`.
    //Genera las filas de la tabla con los datos de los boxeadores.
    boxeador.then((listado) => {
        let filas = ""; // Inicializa las filas como una variable vacío.

        // Recorre el listado para construir las filas.
        listado.forEach((t) => {
            filas += "<tr>"; // Inicia una nueva fila.
            filas += "<td>" + t.Nombre + "</td>"; // Agrega columna para Nombre.
            filas += "<td>" + t.Apellido + "</td>"; // Columna para Apellido.
            filas += "<td>" + t.Edad + "</td>"; // Columna para Edad.
            filas += "<td>" + t.Genero + "</td>"; // Columna para Género.
            filas += "<td>" + t.Categoria + "</td>"; // Columna para Categoría.
            filas += "<td>" + t.Victorias + "</td>"; // Columna para Victorias.
            filas += "<td>" + t.Derrotas + "</td>"; // Columna para Derrotas.
            filas += "<td>" + t.Descripcion + "</td>"; // Columna para Descripción.

            // Botón para modificar el boxeador.
            filas += "<td><button id='mod" + t.id + "'>Modificar</button></td>";

            // Botón para eliminar el boxeador.
            filas += "<td><button id='eli" + t.id + "'>Eliminar</button></td>";

            filas += "</tr>"; // Cierra la fila.
        });

        console.log(filas); // Muestra las filas generadas en la consola.

        // Inserta las filas generadas en la tabla.
        tableit.innerHTML = filas;

        // Recorre cada boxeador para asignar eventos a los botones.
        listado.forEach((p) => {
            // Obtiene el botón de eliminar asociado a este boxeador.
            let botonEliminar = document.getElementById("eli" + p.id);

            // Asigna un evento de click al botón de eliminar.
            botonEliminar.addEventListener("click", () => {
                // Muestra una confirmación antes de eliminar.
                if (confirm(`¿Está seguro de que desea eliminar a ${p.Nombre} ${p.Apellido}?`)) {
                    eliminarboxeador(p.id).then(() => {
                        location.reload(); // Recarga la página tras eliminar.
                    });
                }
            });

            // Obtiene el botón de modificar asociado a este boxeador.
            let botomActualizar = document.getElementById("mod" + p.id);

            // Asigna un evento de click al botón de modificar.
            botomActualizar.addEventListener("click", () => {
                // Redirige a la página de actualización con el ID del boxeador.
                alert(`Redirigiendo a la página de modificación para el boxeador con ID: ${p.id}`);
                window.location.href = "/Actualizar.html?id=" + p.id;
            });
        });
    });

    //Botón para regresar a la página principal.
    document.getElementById("Voler").addEventListener("click", () => {
        window.location.href = "/index.html"; // Redirige al index.
    });
    //Cambia el estilo de la tabla entre modo claro y oscuro.
    document.getElementById("cambioColor").addEventListener("click", () => {
        console.log("Cambiando tema de la tabla...");
        let elements = document.getElementsByClassName("tablaBonita");

        // Recorre todas las tablas con la clase "tablaBonita".
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            // Si tiene la clase "tablaBonita", la cambia a "tablaBonita-oscura".
            if (element.classList.contains("tablaBonita")) {
                element.classList.remove("tablaBonita");
                element.classList.add("tablaBonita-oscura");
            }
            // Si tiene la clase "tablaBonita-oscura", la cambia a "tablaBonita".
            else if (element.classList.contains("tablaBonita-oscura")) {
                element.classList.remove("tablaBonita-oscura");
                element.classList.add("tablaBonita");
            }
        }
    });
});

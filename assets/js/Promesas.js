import { db } from "./Firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 

//Agrega un nuevo boxeador a la base de datos de Firestore.
export let agregarBoxeador = async (boxeador) => {
    // Utiliza addDoc para agregar el boxeador a la colección "boxeador" en Firestore
    const docRef = await addDoc(collection(db, "boxeador"), boxeador);
}

//Obtiene todos los boxeadores desde la base de datos de Firestore.
export let obtenerboxeadores = async () => {
    // Utiliza getDocs para obtener todos los documentos de la colección "boxeador"
    const querySnapshot = await getDocs(collection(db, "boxeador"));
    
    var boxeador = []; // Array donde se almacenarán los datos de los boxeadores obtenidos.

    // Ciclo que recorre todos los documentos obtenidos
    querySnapshot.forEach((doc) => {
        // Crea un objeto con los datos del boxeador
        let boxeadores = {
            'id': doc.id,                  // ID del documento
            'Nombre': doc.data().Nombre,    // Nombre del boxeador
            'Apellido': doc.data().Apellido, // Apellido del boxeador
            'Edad': doc.data().Edad,        // Edad del boxeador
            'Genero': doc.data().Genero,    // Género del boxeador
            'Categoria': doc.data().Categoria, // Categoría del boxeador
            'Victorias': doc.data().Victorias, // Número de victorias
            'Derrotas': doc.data().Derrotas,  // Número de derrotas
            'Descripcion': doc.data().Descripcion // Descripción del boxeador
        }
        // Agrega el boxeador al array
        boxeador.push(boxeadores);
        console.log(doc.id, " => ", doc.data()); // Imprime en consola los datos del boxeador
    });
    
    // Retorna el array con los datos de los boxeadores
    return boxeador;
}

//Elimina un boxeador de la base de datos usando su ID.
export let eliminarboxeador = async (idboxeador) => {
    // Utiliza deleteDoc para eliminar el documento correspondiente al boxeador en Firestore
    await deleteDoc(doc(db, "boxeador", idboxeador));
}

//Obtiene los detalles de un boxeador específico por su ID.

export let obtenerBoxer = async (idboxeador) => {
    // Obtiene el documento del boxeador usando su ID
    const docRef = doc(db, "boxeador", idboxeador);
    const docSnap = await getDoc(docRef);
    
    // Crea un objeto con los datos del boxeador
    let boxeadores = {
        'id': docSnap.id,                   // ID del boxeador
        'Nombre': docSnap.data().Nombre,     // Nombre del boxeador
        'Apellido': docSnap.data().Apellido, // Apellido del boxeador
        'Edad': docSnap.data().Edad,         // Edad del boxeador
        'Genero': docSnap.data().Genero,     // Género del boxeador
        'Categoria': docSnap.data().Categoria, // Categoría del boxeador
        'Victorias': docSnap.data().Victorias, // Número de victorias
        'Derrotas': docSnap.data().Derrotas,  // Número de derrotas
        'Descripcion': docSnap.data().Descripcion // Descripción del boxeador
    }
    
    // Retorna los datos del boxeador
    return boxeadores;
}

//Actualiza los datos de un boxeador específico por su ID.

export let actualizarBoxeador = async (id, p) => {
    // Obtiene el documento del boxeador por su ID
    const docRef = await doc(db, "boxeador", id);
    // Actualiza el documento con los nuevos datos
    updateDoc(docRef, p);
}

let contarLetrasNombre = (nombre) => {
    return `Mi nombre tiene ${nombre.length} letras.`
}

console.log(contarLetrasNombre("Sofía"))

//

let contarLetrasNombreYApellido = (nombre, apellido) => {
    return `Mi nombre tiene ${nombre.length} letras y mi apellido tiene ${apellido.length} letras.`
}

console.log(contarLetrasNombreYApellido("Sofía", "Liendro"))

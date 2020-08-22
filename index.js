// // Propiedad de los strings

// let contarLetrasNombre = (nombre) => {
//     return `Mi nombre tiene ${nombre.length} letras.`
// }

// console.log(contarLetrasNombre("Sofía"))

// //

// let contarLetrasNombreYApellido = (nombre, apellido) => {
//     return `Mi nombre tiene ${nombre.length} letras y mi apellido tiene ${apellido.length} letras.`
// }

// console.log(contarLetrasNombreYApellido("Sofía", "Liendro"))


// // Métodos de strings

// variable.nombreDelMetodo(parametro)

// let nombre = "Sofía"
// let apellido = "Liendro"


// let nombreConcatenado = nombre.concat(" ", apellido, " comunicadora", " del BID.")

// console.log(nombreConcatenado)

// //

// // const edad = prompt("Decime tu edad.")

// edadComoNumero = parseFloat("79.9")

// console.log(edadComoNumero)

// //

// const telefono = prompt("Decime tu teléfono.")

// if (isNaN(parseInt(telefono))) {
//     alert("Escribiste un teléfono inválido.")
// }

//

// let nombre = "sofía"

// console.log(nombre.toUpperCase())


//

let confirma = prompt("¿Querés comprar? Respondé 'Sí'.")

if (confirma.toLowerCase() == "si") {
    alert("Su compra fue confirmada.")
}

confirma()

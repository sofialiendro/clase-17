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

// let confirma = prompt("¿Querés comprar? Respondé 'sí'.")

// if (confirma.toLowerCase() == "sí") {
//     alert("Su compra fue confirmada.")
// }


// // Normalizar nombre

// let nombre = "    soFíA"

// const normalizarNombre = (nombre) => {
//     let nombreSinEspacios = nombre.trim()
//     let primeraLetraDelNombre = nombreSinEspacios.charAt(0)
//     let primeraLetraEnMayuscula = primeraLetraDelNombre.toUpperCase()
//     let restoDelNombre = nombreSinEspacios.slice(1, nombre.length)
//     let restoEnMinuscula = restoDelNombre.toLowerCase()
//     let nombreNormalizado = primeraLetraEnMayuscula + restoEnMinuscula
//     return nombreNormalizado
// }

// console.log("Hola, " + normalizarNombre(nombre) + ".")
// console.log(normalizarNombre("    soFía"))
// console.log(normalizarNombre("MIKE     "))


// 

const nombre = "Sofía"

console.log(nombre.includes("of"))

console.log(nombre.indexOf("a"))

console.log(nombre.replace("f", "l"))

console.log(nombre.replace(/Sofía/g, "Victoria"))


const burlarse = (str) => {
    let reemplazoLaA = str.replace(/a/g, "i")
    let reemplazoLaE = reemplazoLaA.replace(/e/g, "i")
    let reemplazoLaO = reemplazoLaE.replace(/o/g, "i")
    return reemplazoLaO
}

console.log(burlarse("programar es difícil"))

const burlarse2 = (str) => {
    let burla = str.replace(/[aeiou]/g, "i")
    return burla
}

console.log(burlarse2("programar es difícil"))
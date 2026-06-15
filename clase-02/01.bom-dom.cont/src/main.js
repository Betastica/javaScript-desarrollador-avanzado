import './style.css'

console.warn('//! Crear elementos de DOM')

const contenedorPrincipal = document.getElementById('contenedor-principal')
console.log(contenedorPrincipal)

const articulo = document.createElement('article')
articulo.textContent = "Hola mundo"
articulo.classList.add('w-50','h-30','bg-red-600','text-center','text-white')
contenedorPrincipal.appendChild(articulo)

// eliminar un nodo html

articulo.remove()

// volver a agregar

contenedorPrincipal.appendChild(articulo)

// Eventos

const cuadroDeTexto = document.querySelector('input')
console.log(cuadroDeTexto)

/* cuadroDeTexto.setAttribute('id', '5') */
cuadroDeTexto.classList.add('bg-green-700')

const input = document.getElementById('lbl-nombre')
console.log(input)

// ! Para tomar los datos que nos de el usuario:

// 1. La variable donde se guarda el dato ingresado
console.log(input.name)

// 2. Tomar el dato ingresado en el input
console.log(input.value)

const formu = document.getElementById('formu')
console.log(formu)

formu.addEventListener('submit',(e) => {
        e.preventDefault()
        console.log(formu)
        console.log(input.value) // lo que ingresa el usuario
        console.log(input.name) // nombre-oficial
        formu.reset()
})

// Enunciado. Formulario básico

/* 
*Vamos a crear un formulario en el html que tenga:
Nombre (texto), email (email), edad (numero) y un boton de enviar dentro del formulario 

* Requisitos: No debe recargase la página cuando el formulario es enviado
* Validar: Campos deben ser obligatorios
* Extras= mensaje: Si algún dato es inválido, mostrar un mensaje en pantalla
* Mensaje: Se envió correctamente el formulario

*/

const formulario = document.getElementById('integrador')

const nombre = document.getElementById('nombre')

const errorNombre = document.getElementById('error-nombre')

const email = document.getElementById('correo')

const errorCorreo = document.getElementById('error-correo')

const edad = document.getElementById('edad')

const errorEdad = document.getElementById('error-edad')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formulario)
    if (nombre.value === '') {
        errorNombre.textContent = 'Esta casilla no puede quedar vacía'
        errorNombre.style.color = 'red'
        return
    } else {
        errorNombre.textContent = ''
        console.log(`Nombre: ${nombre.value.trim()}`)
    }

    if (email.value === '') {
        errorCorreo.textContent = 'Esta casilla no puede quedar vacía'
        errorCorreo.style.color = 'red'
        return
    } else if (!email.value.includes('@')){
        errorCorreo.textContent = 'El mail debe contener @'
        return
    } else {
        errorCorreo.textContent = ''
        console.log(`Correo electrónico: ${email.value.trim()}`)
    }

    if (edad.value === '') {
        errorEdad.textContent= 'Esta casilla no puede quedar vacía'
        errorEdad.style.color = 'red'
        return
    } else {
        errorEdad.textContent = ''
        console.log(`Edad: ${edad.value.trim()}`)
    }

    console.log('Formulario enviado con éxito')
    
    formulario.reset()
})


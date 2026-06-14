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

cuadroDeTexto.setAttribute('id', '5')
cuadroDeTexto.classList.add('bg-green-700')

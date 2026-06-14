import './style.css'

console.warn('// ! DOM -> document object model')
console.log(document)

console.warn('// ! BOM -> browser object model')
// https://developer.mozilla.org/es/docs/Web/API

console.log(window)


// ECMAScript (Genera los estandares para que JS se pueda utilizar en los navegadores y el backend de la misma manera)

// https://ecma-international.org/

// JavaScript no es ECMAScript -> ECMA nos da pautas para poder escribir JS correctamente
// Que el navegador agrega (APIs) que nos ayudan en JS pero no son parte de JS -> (BOM) -> Fetch, Geolocation, HTMLColletion

console.log(window.location.href)

const btnIr = document.getElementById('btn-ir')
console.log(btnIr)

btnIr.addEventListener('click', function(){
    window.location.href = 'https://google.com'
})

console.warn('//! Selección de elementos en DOM')

console.warn('Tradicionales')
//* getElementById (Mejor que querySelector si trabajamos con ID)
//* getElementsByClassName
//* getElementsByTagName

console.warn('Modernos')
//* querySelector
//* querySelectorAll

// Utilizo todos los selectores que vengo utilizando en CSS con querySelector

// Si quiero seleccionar un ID -> #
// Si quiero seleccionar una CLASE -> .
// Si quiero seleccionar un TAG -> (nombre tag)

// const tituloPrincipal = document.querySelector('h1')
//const tituloPrincipal = document.querySelector('.text-3xl.text-green-600')

const tituloPrincipal = document.querySelector('#titulo-principal')

console.log(tituloPrincipal);

const subtitulo = document.querySelector('#subtitulo')

subtitulo.classList.add('text-green-600', 'text-2xl')
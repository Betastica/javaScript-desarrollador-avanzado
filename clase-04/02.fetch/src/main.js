import './style.css'
// jsonplaceholder -> Es una página que simula un backend para practicar
const url = 'https://jsonplaceholder.typicode.com/posts/' // Con la barrita al final

// Fetch API es una herramienta del BOM para peticiones al backend.

/* const peticion = fetch(url) // -> Este fetch devuelve una promesa
// 1. then(), catch()
// 2. async, await

// 1. then(), catch()

console.log(peticion) // Promise

peticion
    .then(respuesta => {
        console.log(respuesta)
        return respuesta.json() // ReadableStream -> lo convierte en un json // en el fetch hay dos promesas una esperar los datos
    })
    .then(data => { // y otra (que seria esta) para esperar los datos transformados en algo legible por json
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    }) */

// Haciendo peticiones asincronicas a FakeStoreApi

/* const urlFakeStore = 'https://fakestoreapi.com/products/' 

const peticion = fetch(urlFakeStore)

peticion
    .then((res) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response
        //console.log(res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        data.forEach(prod => {
            console.log(prod)
        });
    })
    .catch(err => {
        console.error(err)
    }) */

const urlReqRes = 'https://reqres.in/api/collections/products/records?project_id=30242'

// fetch(<url>, <options>) -> options es un objeto que dentro va a tener los headers -> dentro una clave x-api-key
/* const peticion = fetch(urlReqRes, {
    headers: {
        'x-api-key': import.meta.env.VITE_XAPIKEY
    }
}) */
/* then() | catch() */
/* peticion
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    }) */
// Siempre que dentro de una funcion utilice await mi funcion tiene que ser asincrónica. Uso la palabra reservada async para convertir una funcion sincrónica en una asincrónica
// Otra manera de gestionar las promesas -> async await -> try/catch
/* const peticionReqRes = async () => {
    try {
        console.log(peticion)
        const res = await peticion
        console.log(res)
        //res.json() -> esto devuelve una promise y siempre que hay una promise tengo que esperar, es decir, hay un await
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }

} */

//peticionReqRes()

// ! CRUD completo
// https://vite.dev/guide/env-and-mode
const apiProductos = import.meta.env.VITE_API_PRODUCTOS
console.log(apiProductos);

// CRUD
// C -> CREATE -> Método/verbo POST
// R -> READ -> Método/verbo GET
// U -> UPDATE -> Método/verbo PUT - PATCH
// D -> DELETE -> Método/ verbo DELETE

/* //PUT
const usuario = {
    nombre: 'Maxi',
    apellido: 'Principi',
    rol: 'Docente',
    correo: 'maxi@gmail.com'
}

// > Envío el objeto completo
const usuario = {
    nombre: 'Maxi',
    apellido: 'Principe',
    rol: 'Docente',
    correo: 'maxi@gmail.com'
} */
/* 
// PATCH
const usuario = {
    nombre: 'Maxi',
    apellido: 'Principi',
    rol: 'Docente',
    correo: 'maxi@gmail.com'
}

// > Envío solo lo que se quiere modificar
const usuario = {
    apellido: 'Principe',
} */

// CRUD
// C -> CREATE -> Método/verbo POST -> http://localhost:8080/productos/ -> el producto nuevo -> body
// R -> READ -> Método/verbo GET -> http://localhost:8080/productos/
// R -> READ -> Método/verbo GET -> http://localhost:8080/productos/id -> Obtengo uno solo por id
// U -> UPDATE -> Método/verbo PUT - PATCH -> http://localhost:8080/productos/id -> el producto editado -> body
// D -> DELETE -> Método/ verbo DELETE -> http://localhost:8080/productos/id

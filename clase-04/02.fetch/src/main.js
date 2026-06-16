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
const peticion = fetch(urlReqRes, {
    headers: {
        'x-api-key': import.meta.env.XAPIKEY
    }
})
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
const peticionReqRes = async () => {
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

}

peticionReqRes()
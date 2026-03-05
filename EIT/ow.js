
/*const funcionAsincronica= async ()=>{
const res = await fetch(link)
const data = await res.json()

console.log(data);

}

funcionAsincronica();

/*fetch(link)
.then(respuesta => respuesta.json())
.then((res) => {} )*/

window.addEventListener("DOMContentLoaded", () =>{




const entrada = document.getElementById('inputo');
const boton = document.getElementById('botonardo');
const link = 'https://overfast-api.tekrop.fr/heroes'


async function asincrona(){
const esperaAFetch = await fetch(link);
const esperaAljson = await esperaAFetch.json()

console.log(esperaAljson)
console.log(esperaAljson.role)
return esperaAljson

}

boton.addEventListener("click", () => {


const data = asincrona();
if(entrada.value == data.name){
    
const nombreDeHeroe = document.createElement("h1");
nombreDeHeroe.innerText = data.name
nombreDeHeroe = entrada.value = " "

window.location.href = 'ow2.html'

}

 })

})







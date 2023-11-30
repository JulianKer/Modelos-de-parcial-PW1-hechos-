let textoUniversidad = document.getElementById("texto-universidad");
let contenedorDelTextoUniversidad = document.getElementById("contenedor-del-texto-universidad")

let selectorUniversidad = document.getElementById("selector-universidad");
let selectorColorDelFondo = document.getElementById("selector-color-del-fondo");

let botones = document.getElementsByName("grupo");
let radioBlanco = document.getElementById("blanco");
let radioGris = document.getElementById("gris");
let radioAmarillo = document.getElementById("amarillo");

// compruebo que llama bien a los elementos que quiero
console.log(textoUniversidad);
console.log(contenedorDelTextoUniversidad);
console.log(selectorColorDelFondo);
console.log(selectorUniversidad);
console.log(botones)
console.log(radioBlanco);
console.log(radioGris);
console.log(radioAmarillo);



selectorUniversidad.addEventListener("change", ()=>{
    textoUniversidad.innerHTML = "";
    textoUniversidad.innerHTML = selectorUniversidad.value.toUpperCase();
})

selectorColorDelFondo.addEventListener("change", ()=>{
    let colorSeleccionado = selectorColorDelFondo.value;
    console.log(colorSeleccionado);

    contenedorDelTextoUniversidad.classList.remove("fondoDefault", "fondoRojo", "fondoAzul", "fondoVerde");
    contenedorDelTextoUniversidad.classList.toggle(colorSeleccionado);
});

radioBlanco.addEventListener("click", ()=>{
    textoUniversidad.classList.remove("blanco", "gris", "amarillo");
    textoUniversidad.classList.add("blanco");
});

radioGris.addEventListener("click", ()=>{
    textoUniversidad.classList.remove("blanco", "gris", "amarillo");
    textoUniversidad.classList.add("gris");
});

radioAmarillo.addEventListener("click", ()=>{
    textoUniversidad.classList.remove("blanco", "gris", "amarillo");
    textoUniversidad.classList.add("amarillo");
});




let contenedorDelParrafo = document.getElementById("contenedorDelParrafo");
let texto = document.getElementById("parrafo");

let inputDeTexto = document.getElementById("inputTexto");

let selectorDeColorDeFondo = document.getElementById("colorDelFondo");

let radioCentrado = document.getElementById("centrado");
let radioIzquierda = document.getElementById("izquierda");
let radioDerecha = document.getElementById("derecha");

console.log(contenedorDelParrafo);
console.log(texto.textContent);
console.log(inputDeTexto);
console.log(selectorDeColorDeFondo);
console.log(radioCentrado);
console.log(radioIzquierda);
console.log(radioDerecha);

inputDeTexto.addEventListener("keyup", ()=>{
    let letra = inputDeTexto.value;

    if (texto.textContent === "") {
        texto.textContent = "Título"
    }else{
        texto.textContent = "";
        texto.textContent += letra;
    }
});


selectorDeColorDeFondo.addEventListener("change", ()=>{
    let color = selectorDeColorDeFondo.value;

    contenedorDelParrafo.classList.remove("default", "fondoRojo", "fondoAzul", "fondoVerde");
    contenedorDelParrafo.classList.toggle(color);
});


radioCentrado.addEventListener("click", ()=>{
    contenedorDelParrafo.classList.remove("centro", "izquierda", "derecha");
    contenedorDelParrafo.classList.toggle("centro");
});
radioDerecha.addEventListener("click", ()=>{
    contenedorDelParrafo.classList.remove("centro", "izquierda", "derecha");
    contenedorDelParrafo.classList.toggle("derecha");
});
radioIzquierda.addEventListener("click", ()=>{
    contenedorDelParrafo.classList.remove("centro", "izquierda", "derecha");
    contenedorDelParrafo.classList.toggle("izquierda");
});

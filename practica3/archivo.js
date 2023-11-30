let contenedorDelTextoQueCambia = document.getElementById("contenedorDelTextoQueCambia");
let texto = document.getElementById("texto");

let radioHtml = document.getElementById("html");
let radioCss = document.getElementById("css");
let radioJavascript = document.getElementById("javascript");

let selectorDelColorDelTexto = document.getElementById("selectorDelColorDelTexto");

let botonFondoVerde = document.getElementById("fondoVerde");
let botonFondoVioleta = document.getElementById("fondoVioleta");
let botonFondoNaranja = document.getElementById("fondoNaranja");

console.log(contenedorDelTextoQueCambia);
console.log(texto);
console.log(radioHtml);
console.log(radioCss);
console.log(radioJavascript);
console.log(selectorDelColorDelTexto);
console.log(botonFondoVerde);
console.log(botonFondoVioleta);
console.log(botonFondoNaranja);


//-----------------------------------------------------------------------------
radioHtml.addEventListener("click", ()=>{
    texto.textContent = "HTML";
});
radioCss.addEventListener("click", ()=>{
    texto.textContent = "CSS";
});
radioJavascript.addEventListener("click", ()=>{
    texto.textContent = "JavaScript";
});



selectorDelColorDelTexto.addEventListener("change", ()=>{
    let colorSeleccionado = selectorDelColorDelTexto.value;
    texto.classList.remove("colorDefault", "colorRojo", "colorVerde", "colorAmarillo");
    texto.classList.toggle(colorSeleccionado);
});


botonFondoVerde.addEventListener("click", ()=>{
    contenedorDelTextoQueCambia.classList.remove("fondoVerde", "fondoNaranja", "fondoVioleta");
    contenedorDelTextoQueCambia.classList.toggle("fondoVerde");
})
botonFondoNaranja.addEventListener("click", ()=>{
    contenedorDelTextoQueCambia.classList.remove("fondoVerde", "fondoNaranja", "fondoVioleta");
    contenedorDelTextoQueCambia.classList.toggle("fondoNaranja");
})
botonFondoVioleta.addEventListener("click", ()=>{
    contenedorDelTextoQueCambia.classList.remove("fondoVerde", "fondoNaranja", "fondoVioleta");
    contenedorDelTextoQueCambia.classList.toggle("fondoVioleta");
})









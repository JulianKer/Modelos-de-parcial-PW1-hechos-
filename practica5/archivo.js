let textoQueCambia = document.querySelector("#texto");
let cuadroDelTexto = document.querySelector("#cuadroDelTexto");

let inputTexto = document.querySelector("#inputTexto");

let botones = document.getElementsByName("botones");
let boton1 = document.querySelector("#rojo");
let boton2 = document.querySelector("#verde");
let boton3 = document.querySelector("#azul");

let alineaciones = document.querySelector("#alineaciones");

// lo muestro en la consola para ver que andan bien
console.log(textoQueCambia);
console.log(cuadroDelTexto);
console.log(inputTexto);
console.log(botones);
console.log(alineaciones);


inputTexto.addEventListener("keyup", actualizarContenido);
alineaciones.addEventListener("change", cambiarAlineacion);
botones.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        cuadroDelTexto.classList.remove("rojo", "verde", "azul");
        cuadroDelTexto.classList.add(boton.value);
    });
});

function actualizarContenido(){
    textoQueCambia.textContent = inputTexto.value;
}

function cambiarAlineacion(){
    cuadroDelTexto.classList.remove("izquierda", "centrado", "derecha");
    cuadroDelTexto.classList.add(alineaciones.value);
}















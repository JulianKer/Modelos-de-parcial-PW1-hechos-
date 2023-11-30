let texto = document.getElementById("texto");
let contenedorDelTexto = document.getElementById("contenedorDelTexto");

let inputDelTexto = document.getElementById("inputDelTexto");
let selectorDeColoresDeFondo = document.getElementById("selectorDeColoresDeFondo");

let radioIzquierda = document.getElementById("radioIzquierda");
let radioCentrado = document.getElementById("radioCentrado");
let radioDerecha = document.getElementById("radioDerecha");

// compruebo que los encuentro correctamente 
console.log(texto);
console.log(contenedorDelTexto);
console.log(inputDelTexto);
console.log(selectorDeColoresDeFondo);
console.log(radioIzquierda);
console.log(radioDerecha);
console.log(radioCentrado);


inputDelTexto.addEventListener("keyup", ()=>{
    let textoIngresado = inputDelTexto.value;

    if (texto.textContent == "") {
        texto.textContent = "Países";
    }else{
        texto.textContent = textoIngresado;
    }
});


selectorDeColoresDeFondo.addEventListener("change", ()=>{
    let color = selectorDeColoresDeFondo.value;
    contenedorDelTexto.classList.remove("default", "rojo", "azul", "verde");
    contenedorDelTexto.classList.toggle(color);
});

radioIzquierda.addEventListener("click", ()=>{
    contenedorDelTexto.classList.remove("izquierda", "centro", "derecha");
    contenedorDelTexto.classList.toggle("izquierda");
});

radioCentrado.addEventListener("click", ()=>{
    contenedorDelTexto.classList.remove("izquierda", "centro", "derecha");
    contenedorDelTexto.classList.toggle("centro");
});

radioDerecha.addEventListener("click", ()=>{
    contenedorDelTexto.classList.remove("izquierda", "centro", "derecha");
    contenedorDelTexto.classList.toggle("derecha");
});

// podria haberlo hecho con el querySelectoAll y ponia el name "grupo" y hacía un foreach por cada boton añadiendo un escuchador para que le de el valor de ese boton
// y agregue esa clase al contenedor, pero para eso deberia ponerles el value a los inputs pero como no lo hice, lo hice solo boton pot boton









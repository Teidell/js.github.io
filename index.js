precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let texto = document.querySelector("h6")
texto.innerHTML = "Juego Modificado por Teidell"

texto.style.color = "red"

let sumar = document.querySelector("#sumar")


sumar.addEventListener("click", () => {
    let cantidad = document.querySelector(".cantidad")
    let valor = cantidad.innerHTML 
    cantidad.innerHTML = parseInt(valor) + 1
    let total = document.querySelector(".valor-total")
    total.innerHTML = parseInt(cantidad.innerHTML) * precio
})


let restar = document.querySelector("#restar")

restar.addEventListener("click", () => {
    let cantidad = document.querySelector(".cantidad")
    let valor = cantidad.innerHTML 
    cantidad.innerHTML = parseInt(valor)  -2
    let total = document.querySelector(".valor-total")
    total.innerHTML = parseInt(cantidad.innerHTML) * precio
})
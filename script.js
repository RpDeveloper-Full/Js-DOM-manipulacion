// Seleccionamos los elementos del DOM
const titulo = document.getElementById("titulo");
const btnTexto = document.getElementById("cambiarTexto");
const btnColor = document.getElementById("cambiarColor");
const mensaje = document.getElementById("mensaje");

// Cambiar el texto del título
btnTexto.addEventListener("click", () => {
  titulo.textContent = "Texto cambiado con JS ✨";
  mensaje.textContent = "Has cambiado el título con DOM.";
});

// Cambiar el color del título
btnColor.addEventListener("click", () => {
  titulo.style.color = titulo.style.color === "crimson" ? "darkblue" : "crimson";
  mensaje.textContent = "Has cambiado el color con DOM.";
});
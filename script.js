
const boton = document.getElementById("agregarFila");
boton.addEventListener("click", () => {
  const tabla = document.querySelector("table");
  const nuevaFila = tabla.insertRow();      
  nuevaFila.innerHTML =
    "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
});


const titulo = document.getElementById("titulo");
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "orange";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.color = "white"; 
});


const logo = document.getElementById("logo");
logo.addEventListener("dblclick", () => {
  alert("Has hecho doble clic en el logo HTML5");
});

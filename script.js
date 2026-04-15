const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

boton.addEventListener("click", agregarTarea);

function agregarTarea() {
  const texto = input.value.trim();

  if (texto === "") return;

  const li = document.createElement("li");

  li.textContent = texto;

  // Botón eliminar
  const eliminarBtn = document.createElement("button");
  eliminarBtn.textContent = "X";
  eliminarBtn.style.marginLeft = "10px";
  eliminarBtn.style.backgroundColor = "red";

  eliminarBtn.addEventListener("click", () => {
    li.remove();
    ajustarInput();
  });

  li.appendChild(eliminarBtn);
  lista.appendChild(li);

  input.value = "";

  ajustarInput();
}

function ajustarInput() {
  const cantidad = lista.children.length;

  // Ajusta el ancho dinámicamente
  if (cantidad > 5) {
    input.style.width = "100%";
  } else {
    input.style.width = "65%";
  }
}
let contactos = [
  { id: 1, nombre: "Ana Torres", telefono: "984111222", correo: "ana@correo.com" },
  { id: 2, nombre: "Luis Quispe", telefono: "984333444", correo: "luis@correo.com" }
];
const listaContactos = document.getElementById("listaContactos");

function mostrarContactos() {
  listaContactos.innerHTML = "";

  if (contactos.length === 0) {
    listaContactos.textContent = "No hay contactos registrados.";
    return;
  }

  contactos.forEach(function (c) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const info = document.createElement("span");
    info.textContent = c.nombre + " - " + c.telefono;
    tarjeta.appendChild(info);

    listaContactos.appendChild(tarjeta);
  });
}

mostrarContactos();

const formContacto = document.getElementById("formContacto");
const mensaje = document.getElementById("mensaje");

formContacto.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || telefono === "" || correo === "") {
    mensaje.textContent = "Completa todos los campos.";
    mensaje.style.color = "crimson";
    return;
  }

  contactos.push({ id: Date.now(), nombre: nombre, telefono: telefono, correo: correo });
  mostrarContactos();
  formContacto.reset();

  mensaje.textContent = "Contacto guardado correctamente.";
  mensaje.style.color = "green";
});
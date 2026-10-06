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
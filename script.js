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

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";
    btnEliminar.addEventListener("click", function (e) {
      e.stopPropagation();
      eliminarContacto(c.id);
    });

    tarjeta.appendChild(btnEliminar);
    tarjeta.addEventListener("click", function () {
      verDetalle(c);
    });
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

function eliminarContacto(id) {
  contactos = contactos.filter(function (c) {
    return c.id !== id;
  });
  mostrarContactos();
  document.getElementById("detalleContacto").textContent = "Selecciona un contacto.";
  mensaje.textContent = "Contacto eliminado.";
  mensaje.style.color = "green";
}

function verDetalle(c) {
  const detalle = document.getElementById("detalleContacto");
  detalle.innerHTML = "";

  ["Nombre: " + c.nombre, "Teléfono: " + c.telefono, "Correo: " + c.correo].forEach(function (linea) {
    const p = document.createElement("p");
    p.textContent = linea;
    detalle.appendChild(p);
  });
}
function mostrarSeccion(event, id) {
  event.preventDefault();

  let secciones = document.querySelectorAll(".contenido");
  secciones.forEach(seccion => {
    seccion.classList.add("d-none");
  });

  let seccionActiva = document.getElementById(id);
  seccionActiva.classList.remove("d-none");
  seccionActiva.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
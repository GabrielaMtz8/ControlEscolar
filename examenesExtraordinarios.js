document.addEventListener("DOMContentLoaded", function () {
  const formExtra = document.getElementById("form-extra");

  formExtra.addEventListener("submit", function (e) {
    e.preventDefault();
    const alumno = document.getElementById("alumnoExtra").value;
    const calificacion = document.getElementById("calificacionExtra").value;

    alert(`Calificación extraordinaria guardada:\nAlumno: ${alumno}\nCalificación: ${calificacion}`);
  });
});

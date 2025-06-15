document.addEventListener("DOMContentLoaded", function () {
  const formFinal = document.getElementById("form-final");

  formFinal.addEventListener("submit", function (e) {
    e.preventDefault();
    const alumno = document.getElementById("alumnoFinal").value;
    const calificacion = document.getElementById("calificacionFinal").value;

    alert(`Calificación final guardada:\nAlumno: ${alumno}\nCalificación: ${calificacion}`);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-parcial");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const alumno = document.getElementById("alumno").value;
    const calificacion = document.getElementById("calificacion").value;

    alert(`Calificación parcial guardada:\nAlumno: ${alumno}\nCalificación: ${calificacion}`);
  });
});

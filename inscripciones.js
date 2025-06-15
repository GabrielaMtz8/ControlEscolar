document.getElementById("formInscripcion").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const carrera = document.getElementById("carrera").value.trim();
  const semestre = document.getElementById("semestre").value.trim();

  if (!nombre || !carrera || !semestre) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Alumno inscrito correctamente.");
  }
});

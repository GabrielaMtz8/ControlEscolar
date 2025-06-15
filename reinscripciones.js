document.getElementById("formReinscripcion").addEventListener("submit", function(e) {
  e.preventDefault();

  const matricula = document.getElementById("matricula").value.trim();
  const carrera = document.getElementById("carrera").value.trim();
  const semestre = document.getElementById("semestre").value.trim();

  if (!matricula || !carrera || !semestre) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Reinscripción registrada.");
  }
});

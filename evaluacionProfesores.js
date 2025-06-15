document.getElementById("formEvaluacion").addEventListener("submit", function(e) {
  e.preventDefault();

  const matricula = document.getElementById("matricula").value.trim();
  const profesor = document.getElementById("profesor").value.trim();
  const calificacion = document.getElementById("calificacion").value.trim();

  if (!matricula || !profesor || !calificacion) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Evaluación enviada. ¡Gracias!");
  }
});

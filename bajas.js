document.getElementById("formBaja").addEventListener("submit", function(e) {
  e.preventDefault();

  const matricula = document.getElementById("matricula").value.trim();
  const motivo = document.getElementById("motivo").value.trim();

  if (!matricula || !motivo) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Baja registrada correctamente.");
  }
});

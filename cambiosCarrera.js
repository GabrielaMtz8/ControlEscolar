document.getElementById("formCambio").addEventListener("submit", function(e) {
  e.preventDefault();

  const matricula = document.getElementById("matricula").value.trim();
  const actual = document.getElementById("carreraActual").value.trim();
  const nueva = document.getElementById("nuevaCarrera").value.trim();

  if (!matricula || !actual || !nueva) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Cambio de carrera solicitado.");
  }
});

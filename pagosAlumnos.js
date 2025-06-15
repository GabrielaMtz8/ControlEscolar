document.getElementById("formPago").addEventListener("submit", function(e) {
  e.preventDefault();

  const matricula = document.getElementById("matricula").value.trim();
  const concepto = document.getElementById("concepto").value.trim();
  const monto = document.getElementById("monto").value.trim();

  if (!matricula || !concepto || !monto) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Pago registrado correctamente.");
  }
});

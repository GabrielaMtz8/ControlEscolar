function agregarFila(formId, tablaId, campos) {
  const form = document.getElementById(formId);
  const tabla = document.getElementById(tablaId).getElementsByTagName('tbody')[0];

  for (const campo of campos) {
    if (!form[campo].value.trim()) {
      alert(`Por favor llena el campo: ${campo}`);
      return;
    }
  }

  const nuevaFila = tabla.insertRow();

  campos.forEach(campo => {
    const celda = nuevaFila.insertCell();
    celda.textContent = form[campo].value.trim();
  });

  form.reset();
}

function generarMatricula() {
  const prefijo = "MAT";
  const fecha = new Date();
  const año = fecha.getFullYear().toString().slice(-2);
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefijo}${año}${mes}${dia}${randomNum}`;
}

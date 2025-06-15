const horarios = [];

function agregarHorario() {
  const input = document.getElementById('horarioInput');
  if (input.value.trim()) {
    horarios.push(input.value.trim());
    mostrarHorarios();
    input.value = '';
  }
}

function mostrarHorarios() {
  const ul = document.getElementById('horariosList');
  ul.innerHTML = '';
  horarios.forEach((h, i) => {
    ul.innerHTML += `<li>${h} <button onclick="eliminarHorario(${i})">Eliminar</button></li>`;
  });
}

function eliminarHorario(index) {
  horarios.splice(index, 1);
  mostrarHorarios();
}


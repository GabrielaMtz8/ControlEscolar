const materias = [];

function agregarMateria() {
  const input = document.getElementById('materiaInput');
  if (input.value.trim()) {
    materias.push(input.value.trim());
    mostrarMaterias();
    input.value = '';
  }
}

function mostrarMaterias() {
  const ul = document.getElementById('materiasList');
  ul.innerHTML = '';
  materias.forEach((m, i) => {
    ul.innerHTML += `<li>${m} <button onclick="eliminarMateria(${i})">Eliminar</button></li>`;
  });
}

function eliminarMateria(index) {
  materias.splice(index, 1);
  mostrarMaterias();
}


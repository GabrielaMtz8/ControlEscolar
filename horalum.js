const alumnos = [];

function agregarAlumno() {
  const input = document.getElementById('alumnoInput');
  if (input.value.trim()) {
    alumnos.push(input.value.trim());
    mostrarAlumnos();
    input.value = '';
  }
}

function mostrarAlumnos() {
  const ul = document.getElementById('alumnosList');
  ul.innerHTML = '';
  alumnos.forEach((a, i) => {
    ul.innerHTML += `<li>${a} <button onclick="eliminarAlumno(${i})">Eliminar</button></li>`;
  });
}

function eliminarAlumno(index) {
  alumnos.splice(index, 1);
  mostrarAlumnos();
}


// === CRUD Carreras ===

let carreras = [];

// Agregar Carrera
function agregarCarrera() {
  const nombre = document.getElementById('nombreCarrera').value.trim();
  const duracion = document.getElementById('duracion').value.trim();

  if (nombre === '' || duracion === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  carreras.push({ nombre, duracion });
  mostrarCarreras();
  document.getElementById('nombreCarrera').value = '';
  document.getElementById('duracion').value = '';
}

// Mostrar Carreras
function mostrarCarreras() {
  const tabla = document.getElementById('tablaCarreras');
  tabla.innerHTML = '';

  carreras.forEach((car, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${car.nombre}</td>
        <td>${car.duracion}</td>
        <td>
          <button onclick="editarCarrera(${i})">Editar</button>
          <button onclick="eliminarCarrera(${i})">Eliminar</button>
        </td>
      </tr>`;
  });
}

// Editar Carrera
function editarCarrera(i) {
  const nuevoNombre = prompt('Nuevo nombre de la carrera:', carreras[i].nombre);
  if (nuevoNombre === null) return; // Cancelado

  const nuevaDuracion = prompt('Nueva duración:', carreras[i].duracion);
  if (nuevaDuracion === null) return; // Cancelado

  if (nuevoNombre.trim() && nuevaDuracion.trim()) {
    carreras[i].nombre = nuevoNombre.trim();
    carreras[i].duracion = nuevaDuracion.trim();
    mostrarCarreras();
  } else {
    alert('Campos inválidos.');
  }
}

// Eliminar Carrera
function eliminarCarrera(i) {
  if (confirm('¿Estás seguro de eliminar esta carrera?')) {
    carreras.splice(i, 1);
    mostrarCarreras();
  }
}

// === CRUD Planes de Estudio ===

let planes = [];

// Agregar Plan
function agregarPlan() {
  const nombre = document.getElementById('nombrePlan').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();

  if (nombre === '' || descripcion === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  planes.push({ nombre, descripcion });
  mostrarPlanes();
  document.getElementById('nombrePlan').value = '';
  document.getElementById('descripcion').value = '';
}

// Mostrar Planes
function mostrarPlanes() {
  const tabla = document.getElementById('tablaPlanes');
  tabla.innerHTML = '';

  planes.forEach((plan, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${plan.nombre}</td>
        <td>${plan.descripcion}</td>
        <td>
          <button onclick="editarPlan(${i})">Editar</button>
          <button onclick="eliminarPlan(${i})">Eliminar</button>
        </td>
      </tr>`;
  });
}

// Editar Plan
function editarPlan(i) {
  const nuevoNombre = prompt('Nuevo nombre del plan:', planes[i].nombre);
  if (nuevoNombre === null) return; // Cancelado

  const nuevaDescripcion = prompt('Nueva descripción:', planes[i].descripcion);
  if (nuevaDescripcion === null) return; // Cancelado

  if (nuevoNombre.trim() && nuevaDescripcion.trim()) {
    planes[i].nombre = nuevoNombre.trim();
    planes[i].descripcion = nuevaDescripcion.trim();
    mostrarPlanes();
  } else {
    alert('Campos inválidos.');
  }
}

// Eliminar Plan
function eliminarPlan(i) {
  if (confirm('¿Estás seguro de eliminar este plan?')) {
    planes.splice(i, 1);
    mostrarPlanes();
  }
}

let profesores = [];

// Agregar Profesor
function agregarProfesor() {
  const nombre = document.getElementById('nombreProfesor').value.trim();
  const materia = document.getElementById('materia').value.trim();

  if (nombre === '' || materia === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  profesores.push({ nombre, materia });
  mostrarProfesores();
  document.getElementById('nombreProfesor').value = '';
  document.getElementById('materia').value = '';
}

// Mostrar Profesores
function mostrarProfesores() {
  const tabla = document.getElementById('tablaProfesores');
  tabla.innerHTML = '';

  profesores.forEach((prof, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${prof.nombre}</td>
        <td>${prof.materia}</td>
        <td>
          <button onclick="editarProfesor(${index})">Editar</button>
          <button onclick="eliminarProfesor(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Editar Profesor
function editarProfesor(index) {
  const nuevoNombre = prompt('Nuevo nombre del profesor:', profesores[index].nombre);
  if (nuevoNombre === null) return; // Cancelado

  const nuevaMateria = prompt('Nueva materia:', profesores[index].materia);
  if (nuevaMateria === null) return; // Cancelado

  if (nuevoNombre.trim() && nuevaMateria.trim()) {
    profesores[index].nombre = nuevoNombre.trim();
    profesores[index].materia = nuevaMateria.trim();
    mostrarProfesores();
  } else {
    alert('Campos inválidos.');
  }
}

// Eliminar Profesor
function eliminarProfesor(index) {
  if (confirm('¿Estás seguro de eliminar este profesor?')) {
    profesores.splice(index, 1);
    mostrarProfesores();
  }
}

function eliminarPlan(i) {
  planes.splice(i, 1);
  mostrarPlanes();
}

// POSTGRADOS
let postgrados = [];
function agregarPostgrado() {
  const nombre = document.getElementById('nombrePostgrado').value;
  const nivel = document.getElementById('nivel').value;
  if (nombre && nivel) {
    postgrados.push({ nombre, nivel });
    mostrarPostgrados();
    document.getElementById('nombrePostgrado').value = '';
    document.getElementById('nivel').value = '';
  }
}
function mostrarPostgrados() {
  const tabla = document.getElementById('tablaPostgrados');
  tabla.innerHTML = '';
  postgrados.forEach((post, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${post.nombre}</td>
        <td>${post.nivel}</td>
        <td><button onclick="eliminarPostgrado(${i})">Eliminar</button></td>
      </tr>`;
  });
}
function eliminarPostgrado(i) {
  postgrados.splice(i, 1);
  mostrarPostgrados();
}

// EVALUACIÓN
// === CRUD Evaluaciones de Profesores ===

let evaluaciones = [];

// Agregar Evaluación
function agregarEvaluacion() {
  const nombre = document.getElementById('nombreProfesorEval').value.trim();
  const calificacion = document.getElementById('calificacion').value.trim();

  if (nombre === '' || calificacion === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  evaluaciones.push({ nombre, calificacion });
  mostrarEvaluaciones();
  document.getElementById('nombreProfesorEval').value = '';
  document.getElementById('calificacion').value = '';
}

// Mostrar Evaluaciones
function mostrarEvaluaciones() {
  const tabla = document.getElementById('tablaEvaluaciones');
  tabla.innerHTML = '';

  evaluaciones.forEach((evalua, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${evalua.nombre}</td>
        <td>${evalua.calificacion}</td>
        <td>
          <button onclick="editarEvaluacion(${i})">Editar</button>
          <button onclick="eliminarEvaluacion(${i})">Eliminar</button>
        </td>
      </tr>`;
  });
}

// Editar Evaluación
function editarEvaluacion(i) {
  const nuevoNombre = prompt('Nuevo nombre del profesor:', evaluaciones[i].nombre);
  if (nuevoNombre === null) return; // Cancelado

  const nuevaCalificacion = prompt('Nueva calificación:', evaluaciones[i].calificacion);
  if (nuevaCalificacion === null) return; // Cancelado

  if (nuevoNombre.trim() && nuevaCalificacion.trim()) {
    evaluaciones[i].nombre = nuevoNombre.trim();
    evaluaciones[i].calificacion = nuevaCalificacion.trim();
    mostrarEvaluaciones();
  } else {
    alert('Campos inválidos.');
  }
}

// Eliminar Evaluación
function eliminarEvaluacion(i) {
  if (confirm('¿Estás seguro de eliminar esta evaluación?')) {
    evaluaciones.splice(i, 1);
    mostrarEvaluaciones();
  }
}


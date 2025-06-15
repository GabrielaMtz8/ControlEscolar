document.addEventListener("DOMContentLoaded", function () {
  const btnAsistencia = document.getElementById("btn-asistencia");

  btnAsistencia.addEventListener("click", function () {
    const datos = [
      { alumno: "Gabriela", fecha: "2025-06-01", asistio: "Si" },
      { alumno: "Melisa", fecha: "2025-06-01", asistio: "Si" }
    ];

    let tabla = "<table border='1'><tr><th>Alumno</th><th>Fecha</th><th>Asistencia</th></tr>";
    datos.forEach(d => {
      tabla += `<tr><td>${d.alumno}</td><td>${d.fecha}</td><td>${d.asistio}</td></tr>`;
    });
    tabla += "</table>";
    document.getElementById("reporteAsistencia").innerHTML = tabla;

    alert("Reporte de asistencias mostrado correctamente.");
  });
});

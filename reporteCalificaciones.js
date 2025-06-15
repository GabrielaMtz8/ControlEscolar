document.addEventListener("DOMContentLoaded", function () {
  const btnReporte = document.getElementById("btn-reporte");

  btnReporte.addEventListener("click", function () {
    const datos = [
      { alumno: "Angel", parcial: 8.5, final: 9.0, extraordinario: "N/A" },
      { alumno: "Aarón", parcial: 9.2, final: 9.5, extraordinario: 9.0 }
    ];

    let tabla = "<table border='1'><tr><th>Alumno</th><th>Parcial</th><th>Final</th><th>Extra</th></tr>";
    datos.forEach(d => {
      tabla += `<tr><td>${d.alumno}</td><td>${d.parcial}</td><td>${d.final}</td><td>${d.extraordinario}</td></tr>`;
    });
    tabla += "</table>";
    document.getElementById("reporteCalif").innerHTML = tabla;

    alert("Reporte de calificaciones generado correctamente.");
  });
});

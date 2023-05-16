const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cedulaMedico = document.getElementById("cedula");
const especialidad = document.getElementById("especialidad");
const Consultorio = document.getElementById("Consultorio");
const correo = document.getElementById("correo");
const formularioRegistro = document.getElementById("registro-medicos-form");

formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();
  const medico = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    especialidad: especialidad.value,
    Consultorio: Consultorio.value,
    correo: correo.value,
  };
  let medicos = [];
  let localMedicos = localStorage.getItem("medicos");
  if (localMedicos) {
    medicos = JSON.parse(localMedicos);
  }
  medicos.push(medico);
  localStorage.setItem("medicos", JSON.stringify(medicos));
  formularioRegistro.reset();
  alert("Reigistro almacenado con exito");
});

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cedula = document.getElementById("cedula");
const Edad = document.getElementById("Edad");
const Telefono = document.getElementById("Telefono");
const especialidad = document.getElementById("especialidad");
const formularioRegistro = document.getElementById("registro-pacientes-form");
// se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();
  ///se crea objeto medico para guardar valores que ingresan al formulario
  const paciente = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    Edad: Edad.value,
    Telefono: Telefono.value,
    especialidad: especialidad.value,
  };
  let pacientes = [];
  let localPacientes = localStorage.getItem("pacientes");
  if (localPacientes) {
    pacientes = JSON.parse(localPacientes);
  }
  pacientes.push(paciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  formularioRegistro.reset();
  alert("Paciente registrado con Exito");
});

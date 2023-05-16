function mostrarPacientes() {
    let pacientes = [];
    let localPacientes = localStorage.getItem("pacientes");
    if (localPacientes) {
      pacientes = JSON.parse(localPacientes);
    }
    const tablaPacientes = document.getElementById("tabla-pacientes");
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0];
    pacientes.forEach((paciente) => {
      let fila = cuerpoTabla.insertRow();
      let celdanombre = fila.insertCell();
      let celdaapellido = fila.insertCell();
      let celdacedula = fila.insertCell();
      let celdaEdad = fila.insertCell();
      let celdaTelefono = fila.insertCell();
      let celdaespecialidad = fila.insertCell();
  
      celdanombre.textContent = paciente.nombre;
      celdaapellido.textContent = paciente.apellido;
      celdacedula.textContent = paciente.cedula;
      celdaEdad.textContent = paciente.Edad;
      celdaTelefono.textContent = paciente.Telefono;
      celdaespecialidad.textContent = paciente.especialidad;
    });
  }
  
  mostrarPacientes();
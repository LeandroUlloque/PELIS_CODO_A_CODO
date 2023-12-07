// formulario.js

document.addEventListener("DOMContentLoaded", function () {
    // Espera a que se cargue el DOM antes de ejecutar el código
  
    // Obtén el formulario y agrega un evento de escucha para el envío
    var formulario = document.getElementById("formularioContacto");
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
      // Obtén los valores de los campos del formulario
      var nombreCompleto = document.getElementById("full-name").value;
      var correoElectronico = document.getElementById("email-address").value;
      var mensaje = document.getElementById("message").value;
  
      // Construye los datos que se enviarán
      var datos = {
        "Nombre-completo": nombreCompleto,
        "Correo-electronico": correoElectronico,
        "Mensaje": mensaje,
        "_subject": "Enviar",
      };
  
      // Configura la solicitud AJAX para enviar los datos del formulario
      var xhr = new XMLHttpRequest();
      xhr.open(formulario.method, formulario.action, true);
      xhr.setRequestHeader("Content-Type", "application/json");
  
      // Convierte los datos a formato JSON y envía la solicitud
      xhr.send(JSON.stringify(datos));
  
      // Opcional: Puedes agregar un código para manejar la respuesta de la solicitud si es necesario
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log("Solicitud enviada con éxito");
          // Puedes realizar acciones adicionales si la solicitud se envía con éxito
        } else {
          console.error("Error al enviar la solicitud");
          // Puedes manejar errores aquí
        }
      };
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var formMessages = document.getElementById('formMessages');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario para validación

    var isValid = true;

    // Limpiar mensajes de error anteriores
    form.querySelectorAll('.is-invalid').forEach(function (element) {
      element.classList.remove('is-invalid');
    });
    formMessages.innerHTML = '';

    // Validar nombre
    var nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
      nombre.classList.add('is-invalid');
      isValid = false;
    } else {
      nombre.classList.remove('is-invalid');
    }

    // Validar email
    var email = document.getElementById('email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    // Validar mensaje
    var mensaje = document.getElementById('mensaje');
    if (mensaje.value.trim() === '') {
      mensaje.classList.add('is-invalid');
      isValid = false;
    } else {
      mensaje.classList.remove('is-invalid');
    }

    if (isValid) {
      // Simular envío exitoso del formulario
      formMessages.innerHTML = '<div class="alert alert-success" role="alert">¡Formulario enviado exitosamente!</div>';
      form.reset(); // Opcional: Limpiar el formulario
    } else {
      // Mostrar mensaje de error
      formMessages.innerHTML = '<div class="alert alert-danger" role="alert">Por favor, corrige los errores antes de enviar.</div>';
    }
  });
});
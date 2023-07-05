form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Validar los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || mensaje.trim() === '') {
      // Mostrar alerta si algún campo está vacío
      alert('Por favor, completa todos los campos del formulario.');
    } else {
      // Enviar el formulario si todos los campos están completos
      form.submit();
    }
  });
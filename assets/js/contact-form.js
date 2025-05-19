// Inicializa EmailJS cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {

  emailjs.init("nP_TMxruZCHfUkeLO"); 
  
  // Agregar event listener al formulario
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Mostrar estado de carga
      const submitButton = document.getElementById('submitButton');
      submitButton.disabled = true;
      submitButton.innerText = 'Sending...';
      
      // Ocultar mensajes previos
      document.getElementById('success-message').classList.add('d-none');
      document.getElementById('error-message').classList.add('d-none');
      
      // Enviar formulario con EmailJS
  
      emailjs.sendForm('service_zb0ih0c', 'template_p5iqbrg', this)
        .then(function() {
          // Éxito
          document.getElementById('success-message').classList.remove('d-none');
          contactForm.reset();
        }, function(error) {
          // Error
          document.getElementById('error-message').classList.remove('d-none');
          console.error('Error al enviar el mensaje:', error);
        })
        .finally(function() {
          // Restaurar botón
          submitButton.disabled = false;
          submitButton.innerText = 'Send Message';
        });
    });
  }
});
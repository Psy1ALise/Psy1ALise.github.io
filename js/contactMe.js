window.onload = function() {
  document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_g0acgqq', 'template_agodqhj', this)
          .then(function() {
              console.log('Email Sucessfully Sent.');
          }, function(error) {
              console.log('Failed to Send Email', error);
          });
          window.alert("Email Sucessfully Sent."); 
          document.getElementById("form").reset();
  });
}

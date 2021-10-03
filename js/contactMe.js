const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_agodqhj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Submit';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Submit';
      alert(JSON.stringify(err));
    });
});
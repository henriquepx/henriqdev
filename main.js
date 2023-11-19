// TITLE REFRESH
const titleRefresh = document.getElementById('title');
titleRefresh.addEventListener('click', function () {
    location.reload();
});

// FORM - EMAILJS
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      emailjs.sendForm('service_webqtko', 'template_kxj8ru8', form.current, '6XCPVQDlEI-egjo2f')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      form.reset();
    });
  });
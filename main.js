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
  
// BACK TO TOP
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
  
    // Adiciona um evento de clique à seta
    backToTopButton.addEventListener('click', function () {
      // Scroll suave até o topo da página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Adiciona um observador de rolagem para mostrar ou ocultar a seta conforme necessário
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
});
  
// LANGUAGE SKILLS CONTENT
const menuLanguage = document.querySelectorAll('.menulanguage');
const contentLanguage = document.querySelectorAll('.contentlanguage');

function activeTab(index) {
  contentLanguage.forEach((section) => {
    section.classList.remove('ativo');
  });
  menuLanguage.forEach((section) => {
    section.classList.remove('ativo');
  });
    contentLanguage[index].classList.add('ativo');
    menuLanguage[index].classList.add('ativo');
}

menuLanguage.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
})
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

// MENU HAMBURGER
const menuHamburger = document.querySelector(".menuhamburger");
const mobileMenuContent = document.querySelector(".mobileMenuContent");
const closeIcon = document.querySelector(".hamburgerToClose");
const overlayBg = document.querySelector('.overlay');

menuHamburger.addEventListener('click', () => {
  mobileMenuContent.classList.add('ativo');
  overlayBg.classList.add('ativo');
})

overlayBg.addEventListener("click", () => {
  mobileMenuContent.classList.remove("ativo");
  overlayBg.classList.remove('ativo');
});


closeIcon.addEventListener("click", () => {
  mobileMenuContent.classList.remove("ativo");
  overlayBg.classList.remove('ativo');
});


// ANIMA AO SCROLL
const sectionsToAnimate = document.querySelectorAll('.sectionanima');

function AnimaScroll() {
    sectionsToAnimate.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - 600;
        const image = section.querySelector('.myphoto');

        if (sectionTop < 0) {
            section.classList.add('anima');
            image.classList.add('moveright');
        }
    });
}

window.addEventListener('scroll', AnimaScroll);



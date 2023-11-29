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

    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
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

// MENU HAMBURGER
const menuHamburger = document.querySelector(".menuhamburger");
const mobileMenuContent = document.querySelector(".mobileMenuContent");

let menuAberto = false;

menuHamburger.addEventListener("click", () => {
    if (!menuAberto) {
        menuHamburger.classList.add("ativo");
        mobileMenuContent.classList.add("ativo");
        mobileMenuContent.style.height = "100%";
        mobileMenuContent.style.animation = "animationMenu .5s ease-in-out";
        menuAberto = true;
    } else {
        mobileMenuContent.style.animation = "animationMenuClose .5s ease-in-out";
        setTimeout(() => {
            mobileMenuContent.style.height = "0";
            menuHamburger.classList.remove("ativo");
            mobileMenuContent.classList.remove("ativo");
        }, 500);
        menuAberto = false;
    }
});

// ANIMATION LANGUAGES
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

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

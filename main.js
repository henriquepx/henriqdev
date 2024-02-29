// PREALODER
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
  
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000)); 
      preloader.style.opacity = '0';
  
      setTimeout(() => {
        preloader.style.display = 'none'; 
        document.querySelectorAll('.mainelements').forEach(element => {
          element.classList.add('fade-in');
      });
      });
    };

    fetchData();
  });

// TAB CONTENT
const pages = document.querySelectorAll('.page');
const indexpages = document.querySelectorAll('.indexcontent');

function activeTab(index) {
  pages.forEach((section) => {
    section.classList.remove('active');
  });
  pages[index].classList.add('active');
}

indexpages.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
})

// MOUSE IMG HOVER
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("mousemove", e => {
        const image = link.querySelector(".hoverimage");
        const rect = link.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        image.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
});
  
// SHOWING CONTENT
function changeSection(sectionClass) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.style.animation = 'slideOut 0.5s ease-in-out';
  });

  const targetPage = document.querySelector(`.${sectionClass}`);
  targetPage.style.animation = 'slideIn 0.5s ease-in-out';
  targetPage.style.transform = 'translateY(0)';

  // Remova a animação após a conclusão
  setTimeout(() => {
      pages.forEach(page => {
          page.style.animation = '';
      });
  }, 500);
}

// PARTICLEJS
particlesJS("particles-container", {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 1000 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#003AFF" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
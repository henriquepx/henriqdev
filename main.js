// PREALODER
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
  
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 4100)); 
      preloader.style.opacity = '0';
  
      setTimeout(() => {
        preloader.style.display = 'none'; 
      }, 300);
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
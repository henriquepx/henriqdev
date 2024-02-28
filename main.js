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
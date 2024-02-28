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

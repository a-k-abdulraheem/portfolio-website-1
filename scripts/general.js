const hamburgerMenuElement = document.querySelector('.js-hamburger-menu');
hamburgerMenuElement.addEventListener('click', openSidemenu);

const sidemenuElement = document.querySelector(".js-sidemenu");
const closebtn = document.querySelector(".js-close-button");

document.querySelectorAll('.sidemenu a')
  .forEach( element => {
    element.addEventListener('click', closeSidemenu);
  });

function openSidemenu() {
  hamburgerMenuElement.style.transform = "scale(0)";
  sidemenuElement.style.width = "250px";
  closebtn.style.transform = "scale(1)";
  document.querySelectorAll('main, footer')
    .forEach(element => {
      element.classList.add('opacity-overlay');
    });
}

function closeSidemenu() {
  hamburgerMenuElement.style.transform = "scale(1)";
  sidemenuElement.style.width = "0";
  closebtn.style.transform = "scale(0)";
  document.querySelectorAll('main, footer')
    .forEach(element => {
      element.classList.remove('opacity-overlay');
    });
}

function addMotionToImages() {
  const projectImages = document.querySelectorAll('.js-project-image, .js-about-me-image');

  window.addEventListener('scroll', () => {
    projectImages.forEach((image) => {
      const {top, bottom} = image.getBoundingClientRect();
      const viewTop = (window.innerHeight / 4) * 3;
      const viewBottom = (window.innerHeight / 4)
      if (top < viewTop && bottom > viewBottom) {
        image.classList.add('js-move-image');
      } else {
        image.classList.remove('js-move-image');
      }
    });
  });
}

addMotionToImages(); //call for the about-me-image
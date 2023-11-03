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

/*
document.querySelectorAll('header ul.right-section li a')
  .forEach( listElement => {
    listElement.addEventListener('click', () => {
      const activelistElement = document.querySelector('.js-active-nav-link');
      activelistElement.classList.remove('js-active-nav-link');
      listElement.classList.add('js-active-nav-link');
    });
  });
*/

const portfolioProjectsObject = {
  'mobileAppProjectsArray': [
    {
      projectName: 'Meeting Mobile App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'E Commerce Mobile App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Fitness Mobile App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Modelling Mobile App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    }
  ],
  'websiteProjectsArray': [
    {
      projectName: 'Meeting Website  Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'E Commerce Website Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Fitness Website Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Modelling Website Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    }
  ],
  'desktopProjectsArray': [
    {
      projectName: 'Meeting Desktop App  Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'E Commerce Desktop App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Fitness Desktop App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Modelling Desktop App Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    }
  ],
  'otherProjectProjectsArray': [
    {
      projectName: 'Meeting Other Project Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'E Commerce Other Project Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Fitness Other Project Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    },
    {
      projectName: 'Modelling Other Project Design',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem velit quo beatae sit! Quae nostrum eos eveniet deserunt exercitationem facere quod tempore necessitatibus? Nostrum voluptas earum maiores corrupti aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imageName: '',
      alternateImageText: ''
    }
  ]
};
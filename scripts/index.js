const queryForPortfolioProjects = window.matchMedia('(max-width : 820px)');

displayProjects('mobileAppProjectsArray');

document.querySelectorAll('.js-project-types-button')
  .forEach( buttonElement => {
    buttonElement.addEventListener('click', () => {
      const activeButtonElement = document.querySelector('.js-active-project-types-button');
      activeButtonElement.classList.remove('js-active-project-types-button');
      buttonElement.classList.add('js-active-project-types-button');
      selectProjectTypeToDisplayProjects(buttonElement);
    });
  });

function displayProjects(projectType) {
  let projectSectionHTML = ``;
  for (i = 0; i < 4; i++) {
    const projectDetailsHTML = `
      <div class="project-details">
        <h3>PROJECT ${i+1}</h3>
        <h2>${portfolioProjectsObject[projectType][i].projectName}</h2>
        <p>${portfolioProjectsObject[projectType][i].shortDescription}</p>
        <a><span>&rarr;</span>Read more</a>
      </div>
    `;
    const projectImageHTML = `
      <div class="project-image-container">
        <div class="image">
            <img src="" alt="">
        </div>
      </div>
    `;
    if (queryForPortfolioProjects.matches || (i % 2 === 0)) {
      projectSectionHTML += projectDetailsHTML;
      projectSectionHTML += projectImageHTML;
    } else {
      projectSectionHTML += projectImageHTML;
      projectSectionHTML += projectDetailsHTML;
    }
  }

  document.querySelector('.projects-section')
    .innerHTML = projectSectionHTML;
}

function selectProjectTypeToDisplayProjects(buttonElement) {
  if (buttonElement.innerText === 'Mobile App')
    displayProjects('mobileAppProjectsArray');
  else if (buttonElement.innerText === 'Website')
    displayProjects('websiteProjectsArray');
  else if (buttonElement.innerText === 'Desktop')
    displayProjects('desktopProjectsArray');
  else if (buttonElement.innerText === 'Other Projects')
    displayProjects('otherProjectProjectsArray');
}

const experienceList = [{
  name: 'C',
  imageName: 'C',
  alternateName: 'C Programming Language'
}, {
  name: 'HTML5',
  imageName: 'HTML',
  alternateName: 'HyperText Markup Language or HTML'
}, {
  name: 'CSS3',
  imageName: 'CSS',
  alternateName: 'Cascading Style Sheets or CSS'
}, {
  name: 'C++',
  imageName: 'C++',
  alternateName: 'C++ Programming Language'
}, {
  name: 'Javascript',
  imageName: 'JS',
  alternateName: 'Javascript Programming Language'
}];

let experienceGridElement = document.querySelector('.js-experience-grid');
experienceList.forEach(experienceObject => {
    const {name, imageName, alternateName} = experienceObject;
    const html = `
    <div class="image-container">
      <img src="images/${imageName}.png" alt="${alternateName}" style="width: 80px;">
      <p>${name}</p>
    </div>
    `;
    experienceGridElement.innerHTML += html;
});

const bannerElement = document.querySelector('.js-banner');
bannerElement.addEventListener('animationend', () => {
  setTimeout( () => {
    bannerElement.style.display = 'none'; /*I removed the style from the 'to' in the keyframe because it wasn't working in some browsers*/    
  } , 1000); //Set timer to wait for the '.banner' animation to complete, because JS adds the display:none; property after the first animation (image) completes, instead of when the '.banner' animation completes
});
const bannerElement = document.querySelector('.js-banner');
bannerElement.addEventListener('animationend', () => {
  setTimeout( () => {
    bannerElement.style.display = 'none'; /*I removed the style from the 'to' in the keyframe because it wasn't working in some browsers*/    
  } , 1000); //Set timer to wait for the '.banner' animation to complete, because JS adds the display:none; property after the first animation (image) completes, instead of when the '.banner' animation completes
});

const queryForPortfolioProjects = window.matchMedia('(max-width : 820px)');

let activeButtonElement = document.querySelector('.js-active-project-types-button');
selectProjectTypeToDisplayProjects(activeButtonElement);

document.querySelectorAll('.js-project-types-button')
  .forEach( buttonElement => {
    buttonElement.addEventListener('click', () => {
      activeButtonElement = document.querySelector('.js-active-project-types-button');
      activeButtonElement.classList.remove('js-active-project-types-button');
      buttonElement.classList.add('js-active-project-types-button');
      selectProjectTypeToDisplayProjects(buttonElement);
    });
  });

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

function displayProjects(projectType) {
  let projectSectionHTML = ``;
  for (i = 0; i < 3; i++) {
    const {projectName, description, imageName, link} = portfolioProjectsObject[projectType][i];

    const hrefAttribute = link ? `href="${link}" target="_blank"` : '';

    const projectDetailsHTML = `
      <div class="project-details">
        <h3>PROJECT ${i+1}</h3>
        <h2>${projectName}</h2>
        <p>${description}</p>
        <a ${hrefAttribute}><span>&rarr;</span> View Project</a>
      </div>
    `;
    
    const projectImageHTML = `
      <div class="project-image-container">
        <div class="image-background"></div>
        <div class="image">
            <img src="${imageName}" alt="" class="js-project-image">
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

  addMotionToImages();
}

const servicesGridElement = document.querySelector('.js-services-grid-container');
let servicesHTML = ``;
services.forEach((serviceObject) => {
  servicesHTML += `
    <div class="service-background-container grid-item-${serviceObject.itemNumber}">
      <div class="service-container">
        <div class="service-heading">
          <div class="service-icon">
            <i class="${serviceObject.icon}" style="color: #471abb;"></i>
          </div>
          <h3>${serviceObject.name}</h3>
        </div>
        <p>
          ${serviceObject.shortDescription}
        </p> 
      </div>                        
    </div>
  `;
});

servicesGridElement.innerHTML = servicesHTML;

let experienceGridElement = document.querySelector('.js-experience-grid');
experiences.forEach(experienceObject => {
    const {name, imageName, alternateName} = experienceObject;
    const html = `
    <div class="image-container">
      <img src="${imageName}" alt="${alternateName}" style="width: 80px;">
      <p>${name}</p>
    </div>
    `;
    experienceGridElement.innerHTML += html;
});
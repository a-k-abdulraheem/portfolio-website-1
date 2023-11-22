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
  else if (buttonElement.innerText === 'Others')
    displayProjects('otherProjectProjectsArray');
}

function displayProjects(projectType) {
  let projectSectionHTML = ``;
  portfolioProjectsObject[projectType]
    .forEach((project, i) => {
      const {projectName, description, imageName, link} = project;

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
    });

  document.querySelector('.projects-section')
    .innerHTML = projectSectionHTML;

  addMotionToImages();
}
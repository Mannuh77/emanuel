const starCount = 2000;

function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars-container');

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Random animation duration and delay
    star.style.animationDuration = `${Math.random() * (40 - 15) + 15}s, ${Math.random() * (180 - 60) + 60}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    starsContainer.appendChild(star);
  }

  document.body.appendChild(starsContainer);
}

window.onload = createStars;



// Function to toggle the menu visibility on mobile
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
}

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// Toggle the 'active' class to show/hide the menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});


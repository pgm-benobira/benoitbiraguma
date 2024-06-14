// Select all the project elements
const projects = document.querySelectorAll('.project');

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the project is intersecting
    if (entry.isIntersecting) {
      // Add a class to make it visible
      entry.target.classList.add('visible');

      // Stop observing the project
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // adjust this if you want the projects to be shown earlier or later
});

// For each project, observe it with the Intersection Observer
projects.forEach(project => {
  observer.observe(project);
});
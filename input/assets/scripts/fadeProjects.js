document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.web-project');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            projects.forEach(otherProject => {
                if (otherProject !== project) {
                    otherProject.classList.add('faded');
                }
            });
        });

        project.addEventListener('mouseout', () => {
            projects.forEach(otherProject => {
                otherProject.classList.remove('faded');
            });
        });
    });
});
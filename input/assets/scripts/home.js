const designerButton = document.getElementById('designerButton');
const devButton = document.getElementById('devButton');
const heroDesigner = document.querySelector('.hero--designer');

function updateClipPath(event) {
    if (window.innerWidth > 1280) {
        if (event.type === 'mouseenter') {
            if (event.target.id === 'designerButton') {
                heroDesigner.style.clipPath = 'polygon(0% 0, 100% 0, 100% 100%, -13% 100%)';
                heroDesigner.style.transition = '1.2s ease-in-out';
            } else if (event.target.id === 'devButton') {
                heroDesigner.style.clipPath = 'polygon(113% 0, 100% 0, 100% 100%, 100% 100%)';
                heroDesigner.style.transition = '1.2s ease-in-out';
            }
        } else if (event.type === 'mouseleave') {
            heroDesigner.style.clipPath = 'polygon(56% 0, 100% 0, 100% 100%, 43% 100%)';
            heroDesigner.style.transition = '1.2s ease-in-out';
        }
    } else {
        heroDesigner.style.clipPath = '';
        heroDesigner.style.transition = '';
    }
}

function homepageDesignerTransition() {
    designerButton.addEventListener('mouseenter', updateClipPath);
    designerButton.addEventListener('mouseleave', updateClipPath);
}

function homepageDevTransition() {
    devButton.addEventListener('mouseenter', updateClipPath);
    devButton.addEventListener('mouseleave', updateClipPath);
}

window.addEventListener('resize', updateClipPath);

homepageDesignerTransition();
homepageDevTransition();
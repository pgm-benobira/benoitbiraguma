const designerButton = document.getElementById('designerButton');
const devButton = document.getElementById('devButton');
const heroDesigner = document.querySelector('.hero--designer');

function homepageDesignerTransition() {
    designerButton.addEventListener('mouseenter', function() {
        heroDesigner.style.clipPath = 'polygon(0% 0, 100% 0, 100% 100%, -13% 100%)';
    });
    
    designerButton.addEventListener('mouseleave', function() {
        heroDesigner.style.clipPath = 'polygon(56% 0, 100% 0, 100% 100%, 43% 100%)';
    });
}

homepageDesignerTransition();

function homepageDevTransition() {
    devButton.addEventListener('mouseenter', function() {
        heroDesigner.style.clipPath = 'polygon(113% 0, 100% 0, 100% 100%, 100% 100%)';
    });
    
    devButton.addEventListener('mouseleave', function() {
        heroDesigner.style.clipPath = 'polygon(56% 0, 100% 0, 100% 100%, 43% 100%)';
    });
}

homepageDevTransition();
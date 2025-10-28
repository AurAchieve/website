// Section-based background color changes using IntersectionObserver
(() => {
    const body = document.body;
    const features = document.querySelector('#features');
    const screenshots = document.querySelector('#screenshots');
    const moreFeatures = document.querySelector('#more-features');

    // If sections are missing, default to white
    if (!features && !screenshots && !moreFeatures) {
        body.style.backgroundColor = '#FFFFFF';
        return;
    }

    let featuresInView = false;
    let screenshotsInView = false;
    let moreFeaturesInView = false;

    const applyBackground = () => {
        // Priority: more-features (green) > screenshots (light blue) > features (light yellow) > white
        if (moreFeaturesInView) {
            body.style.backgroundColor = '#CAFFBF'; // light green on "And there's more..."
        } else if (screenshotsInView) {
            body.style.backgroundColor = '#E6F6FF'; // light blue for screenshots
        } else if (featuresInView) {
            body.style.backgroundColor = '#FDFFB6'; // light yellow for features
        } else {
            body.style.backgroundColor = '#FFFFFF'; // white default
        }
    };

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (features && entry.target === features) {
                featuresInView = entry.isIntersecting && entry.intersectionRatio > 0.35;
            } else if (screenshots && entry.target === screenshots) {
                screenshotsInView = entry.isIntersecting && entry.intersectionRatio > 0.35;
            } else if (moreFeatures && entry.target === moreFeatures) {
                moreFeaturesInView = entry.isIntersecting && entry.intersectionRatio > 0.35;
            }
        }
        applyBackground();
    }, {
        root: null,
        threshold: [0, 0.2, 0.35, 0.5, 0.75, 1]
    });

    if (features) observer.observe(features);
    if (screenshots) observer.observe(screenshots);
    if (moreFeatures) observer.observe(moreFeatures);

    // Initial apply
    applyBackground();
})();

window.addEventListener('load', () => {
    const leftDoor = document.querySelector('.door.left');
    const rightDoor = document.querySelector('.door.right');
    const body = document.querySelector('body');

    setTimeout(() => {
        leftDoor.classList.add('open');
        rightDoor.classList.add('open');
        body.classList.add('loaded');
    }, 500);
});
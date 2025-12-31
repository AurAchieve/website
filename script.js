console.log("Aura theme loaded.");

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const tryNowBtn = document.getElementById('try-now-btn');
    const modal = document.getElementById('beta-modal');
    const closeBtn = document.querySelector('.modal-close');

    if (tryNowBtn && modal && closeBtn) {
        tryNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
});

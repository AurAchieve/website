const cursorBubble = document.querySelector('.cursor-bubble');

document.addEventListener('mousemove', (e) => {
    cursorBubble.style.left = e.clientX + 'px';
    cursorBubble.style.top = e.clientY + 'px';
});

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
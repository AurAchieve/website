const cursorBubble = document.querySelector('.cursor-bubble');

document.addEventListener('mousemove', (e) => {
    // Use clientX and clientY to get the cursor position relative to the viewport
    cursorBubble.style.left = e.clientX + 'px';
    cursorBubble.style.top = e.clientY + 'px';
});
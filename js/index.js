// Start animation
const darker = document.querySelector('.darker')

darker.addEventListener('animationend', e => {
    darker.remove()
})
const startBtn = document.querySelector('#start-btn')
const slideSections = document.querySelectorAll('.slide-section')
const lastMsg = document.querySelector('.last-msg')

startBtn.addEventListener('click', () => {
    startBtn.parentElement.style.display = 'none'
    slideSections.forEach(element => {
        element.classList.add('active')
    })
    lastMsg.classList.add('active')
})
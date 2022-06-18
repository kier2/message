const startBtn = document.querySelector('#start-btn')
const slideSections = document.querySelectorAll('.slide-section')
const lastMsgDivs = document.querySelectorAll('.last-msg h1 > div')

startBtn.addEventListener('click', () => {
    startBtn.parentElement.style.display = 'none'
    slideSections.forEach(element => {
        element.classList.add('active')
    })
    lastMsgDivs.forEach(element => {
        element.classList.add('active')
    })
    
})

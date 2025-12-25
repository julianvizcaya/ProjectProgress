const header = document.getElementById('site-header')
const toggleBtn = document.querySelector('.nav__toggle')
const navLinks = document.querySelectorAll('.nav__link')

function setFixed() {
    const activar = 30

    if (window.scrollY >= activar) {
        header.classList.add('fixed')
        document.body.style.paddingTop = header.offsetHeight + 'px'
    } else {
        header.classList.remove('fixed')
        document.body.style.paddingTop = '0px'
    }
}

window.addEventListener('scroll', setFixed)
window.addEventListener('load', setFixed)

// movil
let isOpen = false

toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen
    header.classList.toggle('is-open', isOpen)

    const icon = toggleBtn.querySelector('i')
    icon.className = isOpen ? 'ri-close-line' : 'ri-menu-3-line'
})

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        isOpen = false
        header.classList.remove('is-open')
        toggleBtn.querySelector('i').className = 'ri-menu-3-line'
    })
})
ScrollReveal().reveal('#profile-info', {delay: 500})
ScrollReveal().reveal('#avatar', {delay: 600})
ScrollReveal().reveal('#about', {delay: 700})
ScrollReveal().reveal('#experiences', {delay: 800})
ScrollReveal().reveal('#skills', {delay: 900})
ScrollReveal().reveal('#portfolio', {delay: 1000})
ScrollReveal().reveal('#contact', {delay: 1100})

// Nav link active
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => link.addEventListener('click', function () {
   navActive(this)
}))

// Hamburger menu
const hamburger = document.querySelector('#hamburger-menu')
hamburger.addEventListener('click', () => {
   const navMobile = document.querySelector('.nav-menu-mobile')
   navMobile.classList.add('show')

   const btnClose = document.querySelector('#close-menu')
   btnClose.addEventListener('click', () => {
      navMobile.classList.remove('show')
   })
})

const navLinkMobiles = document.querySelectorAll('.nav-menu-mobile .nav-link')
navLinkMobiles.forEach(link => link.addEventListener('click', function() {
   navActive(this)
   const navMobile = document.querySelector('.nav-menu-mobile')
   navMobile.classList.remove('show')
}))

const navActive = el => {
   const current = document.getElementsByClassName("active")
   current[0].className = current[0].className.replace(" active", "")
   el.className += " active"
}
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

// Nav link mobile active
const navLinkMobiles = document.querySelectorAll('.nav-menu-mobile .nav-link')
navLinkMobiles.forEach(link => link.addEventListener('click', function () {
   navActive(this)
   const navMobile = document.querySelector('.nav-menu-mobile')
   navMobile.classList.remove('show')
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

// Nav current active
const navActive = el => {
   const current = document.getElementsByClassName("active")
   current[0].className = current[0].className.replace(" active", "")
   el.className += " active"
}

// Dark Mode Toggle
const darkModeTooggle = document.querySelector('#dark-mode')
document.addEventListener('DOMContentLoaded', () => {
   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      darkModeTooggle.innerHTML = '<i class="fa-solid fa-sun fa-2xl"></i>'
   } else {
      document.documentElement.classList.remove('dark')
      darkModeTooggle.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i>'
   }
})

darkModeTooggle.addEventListener('click', function () {
   const html = document.documentElement
   html.classList.toggle('dark')

   if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
      this.innerHTML = '<i class="fa-solid fa-sun fa-2xl"></i>'
   } else {
      localStorage.setItem('theme', 'light')
      this.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i>'
   } 
})
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu')
  const navList = document.getElementById('nav-list')
  const navLinks = document.querySelectorAll('.nav-links a')

  // Toggle mobile navigation menu
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active')
    })
  }

  // Close menu when clicking any nav link on mobile
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navList) {
        navList.classList.remove('active')
      }
    })
  })
})

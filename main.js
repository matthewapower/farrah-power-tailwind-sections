import './style.css'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine

Alpine.start()

let lastScrollPos = window.scrollY
window.lastHeaderState = 'top'

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  const scrollPos = window.scrollY
  const scrollDir = lastScrollPos < scrollPos ? 'down' : 'up'
  let state = 'top'


  if (scrollDir == 'down' && scrollPos > 40) state = 'off-top'
  if (scrollDir == 'down' && scrollPos > 1000) state = 'content'
  if (scrollDir == 'up') state = 'up'
  if (scrollPos <= 40) state = 'top'

  if (state != lastHeaderState) header.setAttribute('state', state)
  lastScrollPos = scrollPos
  window.lastHeaderState = state
})

import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in')

    const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', fadeInOnScroll)
    fadeInOnScroll() // run on mount

    return () => window.removeEventListener('scroll', fadeInOnScroll)
  }, [])
}

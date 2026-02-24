// src/hooks/useScrollAnimation.js
// ─────────────────────────────────────────────────────────────────────────────
// Hook reutilizable para animaciones de entrada con GSAP + ScrollTrigger
// Uso: const ref = useScrollAnimation('slideUp') → aplicar ref al elemento
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Presets disponibles ──────────────────────────────────────────────────────
const PRESETS = {
  slideUp:    { y: 60,   x: 0,   opacity: 0 },
  slideDown:  { y: -60,  x: 0,   opacity: 0 },
  slideLeft:  { x: 80,   y: 0,   opacity: 0 },
  slideRight: { x: -80,  y: 0,   opacity: 0 },
  fadeIn:     { opacity: 0, y: 0, x: 0 },
  scaleIn:    { scale: 0.85, opacity: 0, y: 0, x: 0 },
}

// ─── Hook principal ───────────────────────────────────────────────────────────
/**
 * @param {string}  preset     - Nombre del preset: 'slideUp' | 'slideLeft' | etc.
 * @param {object}  options    - Opciones adicionales
 * @param {number}  options.delay     - Delay en segundos (default 0)
 * @param {number}  options.duration  - Duración en segundos (default 0.8)
 * @param {string}  options.ease      - Ease de GSAP (default 'power3.out')
 * @param {string}  options.start     - ScrollTrigger start (default 'top 85%')
 * @param {boolean} options.stagger   - Si true, anima hijos en cascada
 * @param {number}  options.staggerAmount - Tiempo entre cada hijo (default 0.15)
 */
export function useScrollAnimation(preset = 'slideUp', options = {}) {
  const ref = useRef(null)

  const {
    delay         = 0,
    duration      = 0.8,
    ease          = 'power3.out',
    start         = 'top 85%',
    stagger       = false,
    staggerAmount = 0.15,
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const from = PRESETS[preset] || PRESETS.slideUp
    const targets = stagger ? el.children : el

    // Estado inicial
    gsap.set(targets, from)

    // Animación al entrar en viewport
    const anim = gsap.to(targets, {
      x:        0,
      y:        0,
      opacity:  1,
      scale:    1,
      duration,
      delay,
      ease,
      stagger:  stagger ? staggerAmount : 0,
      scrollTrigger: {
        trigger:  el,
        start,
        toggleActions: 'play none none none', // no reversa al salir
      },
    })

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return ref
}

// ─── Hook para stagger automático de listas ───────────────────────────────────
/**
 * Aplica slideUp en cascada a todos los hijos directos del contenedor.
 * Ideal para grids de cards, listas, etc.
 *
 * @param {string} preset
 * @param {number} staggerAmount
 */
export function useStaggerAnimation(preset = 'slideUp', staggerAmount = 0.12) {
  return useScrollAnimation(preset, { stagger: true, staggerAmount })
}

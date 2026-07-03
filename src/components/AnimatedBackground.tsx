import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    const particleCount = Math.min(Math.floor((width * height) / 20000), 65)
    const connectionDistance = 115
    const mouse = { x: -9999, y: -9999 }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    const isDark = () => document.documentElement.classList.contains('dark')

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      const dark = isDark()
      const colorParticle = dark ? 'rgba(34, 211, 238, 0.35)' : 'rgba(37, 99, 235, 0.25)' 
      const colorLine = dark ? 'rgba(99, 102, 241, 0.07)' : 'rgba(37, 99, 235, 0.05)'

      // Draw particle network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Keep inside screen boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = colorParticle
        ctx.fill()

        // Interaction with mouse
        if (mouse.x !== -9999) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = dark ? `rgba(6, 182, 212, ${0.12 * (1 - dist / 140)})` : `rgba(37, 99, 235, ${0.08 * (1 - dist / 140)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Draw links to close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = colorLine
            ctx.lineWidth = 0.7 * (1 - dist / connectionDistance)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      animate()
    } else {
      // If motion is reduced, render once
      const dark = isDark()
      const colorParticle = dark ? 'rgba(34, 211, 238, 0.35)' : 'rgba(37, 99, 235, 0.25)' 
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = colorParticle
        ctx.fill()
      }
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70 dark:opacity-45" />
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
      <div className="absolute bottom-[-12%] right-[-4%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/5" />
      <div className="absolute left-[40%] top-[35%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
    </div>
  )
}

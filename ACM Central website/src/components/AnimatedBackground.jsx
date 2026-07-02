import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Nebula spots in background
    const nebulas = [
      { x: 0, y: 0, rx: 0.1, ry: 0.2, radius: 0.4, color: 'rgba(0, 169, 244, 0.08)', speed: 0.0005 },
      { x: 0, y: 0, rx: 0.8, ry: 0.7, radius: 0.5, color: 'rgba(168, 85, 247, 0.08)', speed: 0.0003 },
      { x: 0, y: 0, rx: 0.5, ry: 0.3, radius: 0.35, color: 'rgba(0, 217, 255, 0.06)', speed: 0.0004 }
    ];

    // Particles array
    const particles = [];
    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 640) return 40; // Mobile
      if (width < 1024) return 80; // Tablet
      return 120; // Desktop
    };
    
    const maxParticles = getParticleCount();

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        this.x = Math.random() * w;
        this.y = init ? Math.random() * h : (Math.random() > 0.5 ? -10 : h + 10);
        
        this.radius = Math.random() * 1.5 + 0.8;
        this.baseSpeed = Math.random() * 0.4 + 0.2;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        
        // Pick custom neon color palette
        const colors = [
          'rgba(0, 169, 244, opacity)',  // ACM Blue
          'rgba(0, 217, 255, opacity)',  // ACM Cyan
          'rgba(168, 85, 247, opacity)'  // ACM Purple
        ];
        this.colorTemplate = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.4 + 0.3;
      }

      draw() {
        const color = this.colorTemplate.replace('opacity', this.opacity.toFixed(2));
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw core glow for slightly larger particles
        if (this.radius > 1.8) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      update(timeVal) {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Apply flow field forces (fluid waves)
        const angle = Math.sin(this.x * 0.003 + timeVal * 0.05) * Math.cos(this.y * 0.003 + timeVal * 0.05) * Math.PI * 2;
        const flowForce = 0.05;
        this.vx += Math.cos(angle) * flowForce * this.baseSpeed;
        this.vy += Math.sin(angle) * flowForce * this.baseSpeed;

        // Limit speed
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = this.baseSpeed * 2.5;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }

        // Apply mouse interaction (repulsion)
        if (mouseRef.current.active) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mRadius = mouseRef.current.radius;

          if (dist < mRadius) {
            const force = (mRadius - dist) / mRadius;
            const forceAngle = Math.atan2(dy, dx);
            
            // Push away
            this.vx += Math.cos(forceAngle) * force * 0.8;
            this.vy += Math.sin(forceAngle) * force * 0.8;
            
            // Fade particles closer to the mouse
            this.opacity = Math.max(0.1, (dist / mRadius) * 0.7);
          } else {
            // Restore normal opacity
            if (this.opacity < 0.3) {
              this.opacity += 0.01;
            }
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap or reset boundaries
        if (this.x < -20 || this.x > w + 20 || this.y < -20 || this.y > h + 20) {
          this.reset(false);
        }
      }
    }

    // Populate particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const drawNebulas = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      nebulas.forEach((n) => {
        // Slowly move center
        const cx = w * (n.rx + Math.sin(time * n.speed) * 0.1);
        const cy = h * (n.ry + Math.cos(time * n.speed * 1.2) * 0.1);
        const r = Math.max(w, h) * n.radius;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      time += 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Dark background fill
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, w, h);

      // Draw digital grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      
      ctx.beginPath();
      // Draw vertical lines
      for (let x = 0; x < w; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      // Draw horizontal lines
      for (let y = 0; y < h; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Draw moving space nebulas
      drawNebulas();

      // Update and draw particles
      particles.forEach((p) => {
        p.update(time);
        p.draw();
      });

      // Draw connection lines
      ctx.lineWidth = 0.8;
      const maxConnectDist = 140;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            // Check if mouse is near the link to distort opacity
            let linkOpacity = (1 - dist / maxConnectDist) * 0.15;
            
            if (mouseRef.current.active) {
              const mx = (p1.x + p2.x) / 2;
              const my = (p1.y + p2.y) / 2;
              const mdx = mx - mouseRef.current.x;
              const mdy = my - mouseRef.current.y;
              const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
              const mRad = mouseRef.current.radius;
              
              if (mDist < mRad) {
                linkOpacity *= Math.max(0.15, mDist / mRad);
              }
            }

            ctx.strokeStyle = `rgba(0, 169, 244, ${linkOpacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw interactive glowing ring around cursor
      if (mouseRef.current.active) {
        ctx.shadowBlur = 0; // Avoid performance hit of shadowBlur
        const grad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius
        );
        grad.addColorStop(0, 'rgba(0, 217, 255, 0.03)');
        grad.addColorStop(0.5, 'rgba(0, 169, 244, 0.015)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20"
      style={{ pointerEvents: 'none', background: '#050505' }}
    />
  );
};

export default AnimatedBackground;

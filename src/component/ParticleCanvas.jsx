import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    };

    const handleMouseMove = (e) => {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5,
        color: getRandomColor(), // 수정된 부분: 랜덤 색상 생성
        opacity: .8,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5,
      });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        /* ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`; */
        ctx.fillStyle = `${particle.color}`; // 수정된 부분: 색상 적용
        ctx.beginPath();
        ctx.font = `${particle.size}px Arial`;
        ctx.fillText('★', particle.x, particle.y);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.01;

        if (particle.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animateParticles);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas
    ref={canvasRef}
    style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      background: '',
      zIndex: '100',
    }}
  />;
};

export default ParticleCanvas;

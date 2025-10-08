class Particle {
  constructor(container, width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.container = container;
    this.width = width;
    this.height = height;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.width) this.x = 0;
    if (this.x < 0) this.x = this.width;
    if (this.y > this.height) this.y = 0;
    if (this.y < 0) this.y = this.height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#7d4aff";
    ctx.fill();
  }
}

export function initParticles(canvas) {
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const particles = Array.from({ length: 120 }, () => new Particle(canvas, width, height));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(ctx); });
    requestAnimationFrame(animate);
  }

  animate();
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

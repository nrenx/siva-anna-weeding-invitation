export function triggerParticleBurst(x: number, y: number) {
  const container = document.createElement("div");
  container.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;`;
  document.body.appendChild(container);

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    const size = 4 + Math.random() * 4;
    const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5) * 0.5;
    const distance = 60 + Math.random() * 80;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    dot.style.cssText = `
      position:absolute;
      left:${x}px;top:${y}px;
      width:${size}px;height:${size}px;
      background:#C9A84C;
      border-radius:50%;
      pointer-events:none;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      opacity:1;
    `;
    container.appendChild(dot);

    requestAnimationFrame(() => {
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
      dot.style.opacity = "0";
    });
  }

  setTimeout(() => container.remove(), 1000);
}

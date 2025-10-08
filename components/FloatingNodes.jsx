import { useEffect, useRef } from "react";

export default function FloatingNodes() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const nodes = [];
    const numNodes = 6;

    for (let i = 0; i < numNodes; i++) {
      const node = document.createElement("div");
      node.className = "floating-node";
      node.style.backgroundColor = `rgba(125, 74, 255, 0.6)`;
      node.style.width = `${20 + Math.random()*20}px`;
      node.style.height = node.style.width;
      node.style.borderRadius = "50%";
      node.style.position = "absolute";
      node.style.left = `${50 + Math.random()*200 - 100}px`;
      node.style.top = `${50 + Math.random()*200 - 100}px`;
      container.appendChild(node);
      nodes.push(node);
    }

    let angle = 0;
    const animate = () => {
      angle += 0.01;
      nodes.forEach((node, i) => {
        const radius = 120 + i*10;
        node.style.transform = `translate(${Math.cos(angle + i) * radius}px, ${Math.sin(angle + i) * radius}px)`;
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => nodes.forEach(node => container.removeChild(node));
  }, []);

  return <div ref={containerRef} className="absolute inset-0"></div>;
}

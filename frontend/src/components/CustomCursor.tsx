import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "hsl(262 83% 58% / 0.6)";
      dot.style.transform = "translate(-50%, -50%) scale(1.5)";
    };

    const onMouseLeaveInteractive = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "hsl(262 83% 58% / 0.3)";
      dot.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animate);

    // Add hover effects to interactive elements
    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "hsl(262 83% 68%)",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid hsl(262 83% 58% / 0.3)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;

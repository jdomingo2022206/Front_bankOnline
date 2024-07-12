import React, { useEffect, useRef } from "react";

const AnimatedBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    const loadVanta = () => {
      if (window.VANTA) {
        vantaEffectRef.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x34339d,
          shininess: 24.0,
          waveHeight: 11.5,
          waveSpeed: 0.85,
          zoom: 0.65
        });
      }
    };

    if (!window.VANTA) {
      const script1 = document.createElement("script");
      script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src = "https://unpkg.com/vanta/dist/vanta.waves.min.js";
        script2.onload = loadVanta;
        document.body.appendChild(script2);
      };
      document.body.appendChild(script1);
    } else {
      loadVanta();
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ width: "100%", height: "100vh", position: "relative" }}>
      {children}
    </div>
  );
};

export default AnimatedBackground;
import  { useState, useRef, useEffect, useCallback } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

export function ButtonEffect() {
  const refAnimationInstance = useRef(null);
  const audioRef = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      // Reproduzir o áudio
      audioRef.current.play();

      // Iniciar a animação
      setIntervalId(setInterval(nextTickAnimation, 400));
      setTimeout(() => {
        stopAnimation();
        audioRef.current.pause(); // Pausar o áudio após 3 segundos
        audioRef.current.currentTime = 0; // Reiniciar o áudio
      }, 12000); // Stop after 3 seconds
    }
  }, [intervalId, nextTickAnimation]);


  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div>
      <button onClick={startAnimation} className="Button-effect">Surpresa</button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <audio ref={audioRef} src="../src/assets/musica.mp3" />
    </div>
  );
}

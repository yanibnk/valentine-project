"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";

const flowers = [
  "/usv.mp4",
  "/us0.jpg",
  "/flowers1.jpg",
  "/us1.jpg",
  "/flowers2.jpg",
  "/us2.jpg",
  "/flowers3.jpg",
  "/us4.jpg",
  "/flowers4.jpg",
  "/us3.jpg",
  "/image.png",
  

];

export default function ValentineSurprise() {
  const [currentFlower, setCurrentFlower] = useState(0);
  const [showText, setShowText] = useState(false);

  // Musique romantique
  useEffect(() => {
    const sound = new Howl({
      src: ["/romantic-music.mp3"],
      volume: 0.5,
      autoplay: true,
      loop: true,
    });

    return () => sound.stop();
  }, []);

  useEffect(() => {
    if (!flowers[currentFlower].toLowerCase().endsWith(".mp4")) {
      const interval = setInterval(() => {
        setCurrentFlower((prev) => (prev + 1) % flowers.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentFlower]);
  

  // Apparition progressive du texte
  useEffect(() => {
    setTimeout(() => setShowText(true), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 to-red-600 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {/* Pluie de cœurs */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-300 text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 50}px`,
          }}
          animate={{
            y: [0, 1000],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Titre animé */}
      <motion.h1
        className="text-5xl font-extrabold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        HAPPY VALENTINE'S DAY HABIBIIIII LOVE YOU SO MUCH❤️
      </motion.h1>

      {flowers[currentFlower].endsWith(".mp4") ? (
  
  <motion.video
  key={currentFlower}
  src={flowers[currentFlower]}
  className="w-96 h-96 object-cover rounded-2xl mt-6 shadow-lg border-4 border-white"
  autoPlay
  loop={false} // Empêcher la vidéo de se relancer
  muted
  playsInline
  onEnded={() => setCurrentFlower((prev) => (prev + 1) % flowers.length)} // Change après la vidéo
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
/>

) : (
  <motion.img
    key={currentFlower}
    src={flowers[currentFlower]}
    alt="Beautiful Flowers"
    className="w-96 h-96 object-cover rounded-2xl mt-6 shadow-lg border-4 border-white"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />
)}



      {/* Message romantique */}
      {showText && (
        <motion.p
          className="text-lg text-white mt-4 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          I know it's hard being this far from you, but know that you're in my thoughts every second. 💕
          this was a small effort from me to tell you that i love you so MUCH❤️
        </motion.p>
      )}
    </div>
  );
}

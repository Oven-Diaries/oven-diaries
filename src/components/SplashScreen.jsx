import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { menuData, galleryImages } from '../data';

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Extract all unique image URLs
    const menuImageUrls = menuData.map((item) => item.image).filter(Boolean);
    const allImageUrls = Array.from(new Set([...menuImageUrls, ...galleryImages]));
    
    let loadedCount = 0;
    const totalImages = allImageUrls.length;

    if (totalImages === 0) {
      onFinish();
      return;
    }

    const checkPorgress = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalImages) * 100));
      if (loadedCount >= totalImages) {
        // Add a tiny delay once reaching 100% so it feels smooth
        setTimeout(onFinish, 600);
      }
    };

    allImageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkPorgress;
      img.onerror = checkPorgress; // even if it errors, we count it to avoid hanging
    });

    // Fallback: don't let it hang infinitely if images stall
    const fallbackTimer = setTimeout(() => {
      onFinish();
    }, 10000); // 10s maximum load time

    return () => clearTimeout(fallbackTimer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#1c2070] flex flex-col items-center justify-center"
    >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative"
        >
          <img 
            src="/logo.png" 
            alt="Oven Diaries Menu Loading" 
            className="w-48 h-auto object-contain drop-shadow-2xl brightness-110"
          />
        </motion.div>
        
        {/* Loading Progress Bar */}
        <div className="mt-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#b8a35e]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#b8a35e]/80 font-medium">
          Loading {progress}%
        </div>
      </motion.div>
  );
}

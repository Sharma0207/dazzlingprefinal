import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ isLoading }) {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Giving makeover";
  
  useEffect(() => {
    if (!isLoading) {
      setDisplayText("");
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#FFD5BB] via-[#FFF2EA] to-[#FFF7F2] z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#D09163] rounded-full opacity-20" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-[#D09163] rounded-full opacity-10" />
      </motion.div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Makeup Brush Animation */}
        <motion.svg
          width="140"
          height="240"
          viewBox="0 0 140 240"
          className="drop-shadow-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            {/* Gradients for realistic shading */}
            <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E8B5A0" />
              <stop offset="50%" stopColor="#D09163" />
              <stop offset="100%" stopColor="#C87F52" />
            </linearGradient>

            <radialGradient id="bristleGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#E8C9B8" opacity="0.9" />
              <stop offset="60%" stopColor="#D09163" />
              <stop offset="100%" stopColor="#B87540" />
            </radialGradient>

            <linearGradient id="ferruleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8C4A0" />
              <stop offset="50%" stopColor="#D4A870" />
              <stop offset="100%" stopColor="#A87840" />
            </linearGradient>

            <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3D2817" />
              <stop offset="50%" stopColor="#2D1810" />
              <stop offset="100%" stopColor="#1D0E08" />
            </linearGradient>
          </defs>

          {/* Brush Bristles - Main shape */}
          <motion.g
            initial={{ scaleY: 0.9 }}
            animate={{ scaleY: [0.9, 1.05, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "70px 45px" }}
          >
            {/* Main bristle body - fluffier shape */}
            <ellipse cx="70" cy="50" rx="26" ry="35" fill="url(#bristleGradient)" />

            {/* Left side bristles */}
            <ellipse cx="48" cy="42" rx="8" ry="24" fill="url(#bristleGradient)" opacity="0.85" />
            <ellipse cx="42" cy="55" rx="6" ry="20" fill="url(#bristleGradient)" opacity="0.7" />

            {/* Right side bristles */}
            <ellipse cx="92" cy="42" rx="8" ry="24" fill="url(#bristleGradient)" opacity="0.85" />
            <ellipse cx="98" cy="55" rx="6" ry="20" fill="url(#bristleGradient)" opacity="0.7" />

            {/* Top highlight - light reflection */}
            <ellipse cx="65" cy="25" rx="14" ry="12" fill="#FFF5E6" opacity="0.5" />

            {/* Individual bristle strands for texture */}
            <g opacity="0.4" stroke="#B87540" strokeWidth="0.8">
              <path d="M 55 50 Q 52 60 50 75" />
              <path d="M 65 48 Q 64 62 63 80" />
              <path d="M 75 48 Q 76 62 77 80" />
              <path d="M 85 50 Q 88 60 90 75" />
              <path d="M 70 48 Q 70 65 71 82" />
              <path d="M 50 58 Q 48 70 47 85" />
              <path d="M 90 58 Q 92 70 93 85" />
            </g>

            {/* Bottom bristle texture lines */}
            <g opacity="0.3" stroke="#D09163" strokeWidth="0.6">
              <path d="M 58 75 L 56 90" />
              <path d="M 70 78 L 70 95" />
              <path d="M 82 75 L 84 90" />
              <path d="M 48 80 L 46 95" />
              <path d="M 92 80 L 94 95" />
            </g>
          </motion.g>

          {/* Ferrule (Metal Band) - More realistic */}
          <g>
            {/* Main ferrule cylinder */}
            <rect x="48" y="85" width="44" height="14" fill="url(#ferruleGradient)" rx="1" />

            {/* Top rim highlight */}
            <ellipse cx="70" cy="85" rx="22" ry="3" fill="#F5E6D3" opacity="0.7" />

            {/* Bottom shadow */}
            <ellipse cx="70" cy="99" rx="22" ry="2" fill="#8B5E3C" opacity="0.4" />

            {/* Vertical grooves/texture */}
            <g stroke="#A87840" strokeWidth="0.5" opacity="0.3">
              <line x1="58" y1="85" x2="58" y2="99" />
              <line x1="70" y1="85" x2="70" y2="99" />
              <line x1="82" y1="85" x2="82" y2="99" />
            </g>
          </g>

          {/* Brush Handle - Wooden texture */}
          <motion.g
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "70px 105px" }}
          >
            {/* Main handle */}
            <rect x="62" y="99" width="16" height="110" fill="url(#handleGradient)" rx="8" />

            {/* Light reflection on handle */}
            <rect x="65" y="100" width="3" height="105" fill="#4A3020" opacity="0.5" rx="2" />

            {/* Wood grain texture */}
            <g opacity="0.2" stroke="#1D0E08" strokeWidth="0.5">
              <path d="M 62 120 Q 70 120 78 120" />
              <path d="M 62 140 Q 70 142 78 140" />
              <path d="M 62 160 Q 70 158 78 160" />
              <path d="M 62 180 Q 70 182 78 180" />
            </g>

            {/* Decorative band near top */}
            <rect x="60" y="155" width="20" height="5" fill="#D09163" rx="2" />
            <ellipse cx="70" cy="155" rx="10" ry="2" fill="#E8B5A0" opacity="0.6" />
            <ellipse cx="70" cy="160" rx="10" ry="2" fill="#B87540" opacity="0.4" />

            {/* Handle end (base) */}
            <circle cx="70" cy="209" r="9" fill="#2D1810" />
            <circle cx="70" cy="209" r="7" fill="#3D2817" opacity="0.7" />
          </motion.g>

          {/* Sparkle/Shine effects */}
          <motion.g
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <circle cx="105" cy="35" r="2.5" fill="#FFE8D0" />
            <circle cx="35" cy="50" r="2" fill="#FFD5BB" />
          </motion.g>

          <motion.g
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            <circle cx="110" cy="80" r="2" fill="#FFE8D0" />
            <circle cx="30" cy="95" r="2.5" fill="#FFD5BB" />
          </motion.g>
        </motion.svg>

        {/* Text Animation Container */}
        <div className="text-center space-y-4">
          {/* Main text with typing effect */}
          <motion.h2
            className="font-playfair-display text-3xl md:text-4xl font-bold text-[#1D1D1D]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-[#D09163]"
            >
              {isLoading && displayText.length < fullText.length ? "|" : ""}
            </motion.span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-libre-franklin text-base md:text-lg text-[#424242]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Wait a second...
          </motion.p>

          {/* Loading dots */}
          <motion.div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#D09163]"
                animate={{ y: [-8, 0, -8] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

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
        {/* Animated Face Getting Makeup Applied */}
        <motion.svg
          width="200"
          height="240"
          viewBox="0 0 200 240"
          className="drop-shadow-2xl"
        >
          <defs>
            {/* Skin tone gradient */}
            <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D5B8" />
              <stop offset="100%" stopColor="#E8C4A0" />
            </linearGradient>

            {/* Blush gradient */}
            <radialGradient id="blushGradient" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#FFB6D9" opacity="0.7" />
              <stop offset="100%" stopColor="#FF69B4" opacity="0.3" />
            </radialGradient>

            {/* Eye makeup gradient */}
            <linearGradient id="eyeMakeupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2C1810" opacity="0.8" />
              <stop offset="100%" stopColor="#D09163" opacity="0.6" />
            </linearGradient>

            {/* Lip gradient */}
            <linearGradient id="lipGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#AD1457" />
            </linearGradient>

            {/* Glow effect */}
            <radialGradient id="glowGradient">
              <stop offset="0%" stopColor="#FFD5BB" opacity="0.6" />
              <stop offset="100%" stopColor="#D09163" opacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Glow - Animated */}
          <motion.circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.5, 1] }}
          />

          {/* HAIR - Long flowing hair */}
          {/* Hair left side */}
          <path
            d="M 50 90 Q 40 100 38 130 Q 36 160 45 175 Q 55 185 65 180 Q 70 120 50 90"
            fill="#3D2817"
          />

          {/* Hair right side */}
          <path
            d="M 150 90 Q 160 100 162 130 Q 164 160 155 175 Q 145 185 135 180 Q 130 120 150 90"
            fill="#3D2817"
          />

          {/* Hair back/top */}
          <ellipse cx="100" cy="40" rx="58" ry="45" fill="#2D1810" />

          {/* Hair front left flowing */}
          <path
            d="M 65 50 Q 55 70 52 100 Q 50 120 55 140"
            stroke="#3D2817"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
            strokeLinecap="round"
          />

          {/* Hair front right flowing */}
          <path
            d="M 135 50 Q 145 70 148 100 Q 150 120 145 140"
            stroke="#3D2817"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
            strokeLinecap="round"
          />

          {/* Hair strand texture - left */}
          <path
            d="M 60 55 Q 50 80 48 110"
            stroke="#2D1810"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />

          {/* Hair strand texture - right */}
          <path
            d="M 140 55 Q 150 80 152 110"
            stroke="#2D1810"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />

          {/* Hair center parting */}
          <path
            d="M 100 35 Q 100 50 100 70"
            stroke="#2D1810"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />

          {/* Hair shine/highlight */}
          <ellipse cx="80" cy="55" rx="12" ry="18" fill="#4A3020" opacity="0.4" />

          {/* Face Head - Oval shape */}
          <ellipse cx="100" cy="110" rx="52" ry="65" fill="url(#skinGradient)" stroke="#D09163" strokeWidth="1.5" opacity="0.3" />

          {/* Face highlight/shadow for depth */}
          <ellipse cx="78" cy="95" rx="22" ry="30" fill="#FFFFFF" opacity="0.1" />

          {/* LEFT EYE */}
          {/* Eye white */}
          <ellipse cx="70" cy="85" rx="12" ry="16" fill="#FFFFFF" stroke="#D09163" strokeWidth="0.5" />

          {/* Iris - initially not visible, then appears */}
          <motion.circle
            cx="70"
            cy="92"
            r="7"
            fill="#6B4423"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Pupil */}
          <motion.circle
            cx="70"
            cy="92"
            r="4"
            fill="#1D1D1D"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Eye shine */}
          <motion.circle
            cx="68"
            cy="89"
            r="2"
            fill="#FFFFFF"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Eye makeup - eyeliner */}
          <motion.path
            d="M 58 85 Q 70 80 82 85"
            stroke="#2C1810"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0, 1, 1], opacity: [0, 0, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.35, 1] }}
          />

          {/* Eyeshadow */}
          <motion.ellipse
            cx="70"
            cy="78"
            rx="10"
            ry="6"
            fill="url(#eyeMakeupGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.6, 0.6] }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.35, 1] }}
          />

          {/* RIGHT EYE */}
          {/* Eye white */}
          <ellipse cx="130" cy="85" rx="12" ry="16" fill="#FFFFFF" stroke="#D09163" strokeWidth="0.5" />

          {/* Iris */}
          <motion.circle
            cx="130"
            cy="92"
            r="7"
            fill="#6B4423"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Pupil */}
          <motion.circle
            cx="130"
            cy="92"
            r="4"
            fill="#1D1D1D"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Eye shine */}
          <motion.circle
            cx="128"
            cy="89"
            r="2"
            fill="#FFFFFF"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Eye makeup - eyeliner */}
          <motion.path
            d="M 118 85 Q 130 80 142 85"
            stroke="#2C1810"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0, 1, 1], opacity: [0, 0, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.35, 1] }}
          />

          {/* Eyeshadow */}
          <motion.ellipse
            cx="130"
            cy="78"
            rx="10"
            ry="6"
            fill="url(#eyeMakeupGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.6, 0.6] }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.35, 1] }}
          />

          {/* LEFT CHEEK BLUSH */}
          <motion.ellipse
            cx="50"
            cy="115"
            rx="15"
            ry="12"
            fill="url(#blushGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 0.8, 0.8] }}
            transition={{ duration: 2.5, times: [0, 0.4, 0.5, 0.65, 1] }}
          />

          {/* RIGHT CHEEK BLUSH */}
          <motion.ellipse
            cx="150"
            cy="115"
            rx="15"
            ry="12"
            fill="url(#blushGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 0.8, 0.8] }}
            transition={{ duration: 2.5, times: [0, 0.4, 0.5, 0.65, 1] }}
          />

          {/* MOUTH/LIPS */}
          {/* Upper lip */}
          <motion.path
            d="M 80 150 Q 100 140 120 150"
            stroke="url(#lipGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0, 1, 1], opacity: [0, 0, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.5, 0.7, 1] }}
          />

          {/* Lower lip */}
          <motion.path
            d="M 80 150 Q 100 165 120 150"
            fill="url(#lipGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.5, 0.7, 1] }}
          />

          {/* Lip shine */}
          <motion.ellipse
            cx="100"
            cy="155"
            rx="10"
            ry="3"
            fill="#FFFFFF"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 0.5, 0.5] }}
            transition={{ duration: 2.5, times: [0, 0.5, 0.65, 0.75, 1] }}
          />

          {/* Nose - simple line */}
          <line x1="100" y1="95" x2="100" y2="135" stroke="#D09163" strokeWidth="0.5" opacity="0.3" />

          {/* Sparkle effects - Final transformation */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 1, 1] }}
            transition={{ duration: 2.5, times: [0, 0.6, 0.7, 0.8, 1] }}
          >
            <circle cx="60" cy="60" r="2" fill="#D09163" />
            <circle cx="140" cy="60" r="2" fill="#D09163" />
            <circle cx="100" cy="30" r="2.5" fill="#FFD5BB" />
            <circle cx="50" cy="140" r="1.5" fill="#D09163" />
            <circle cx="150" cy="140" r="1.5" fill="#FFB6D9" />
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

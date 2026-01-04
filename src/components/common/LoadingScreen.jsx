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
        {/* Realistic Lipstick Animation */}
        <motion.svg
          width="160"
          height="220"
          viewBox="0 0 160 220"
          className="drop-shadow-2xl"
          initial={{ rotate: -15 }}
          animate={{ rotate: [-15, -5, -15] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            {/* Glossy lipstick gradient */}
            <linearGradient id="lipstickGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C41E3A" />
              <stop offset="40%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#AD1457" />
            </linearGradient>

            {/* Shiny gloss effect */}
            <linearGradient id="glossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" opacity="0.8" />
              <stop offset="20%" stopColor="#FFFFFF" opacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" opacity="0" />
            </linearGradient>

            {/* Tube body gradient */}
            <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5E6D3" />
              <stop offset="50%" stopColor="#E8D4C0" />
              <stop offset="100%" stopColor="#D9C3A8" />
            </linearGradient>

            {/* Top cap gradient */}
            <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2C1810" />
              <stop offset="60%" stopColor="#1A0F0A" />
              <stop offset="100%" stopColor="#0F0805" />
            </linearGradient>

            {/* Reflection shine */}
            <radialGradient id="shineGradient" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#FFFFFF" opacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" opacity="0" />
            </radialGradient>
          </defs>

          {/* Lipstick Bullet (tip) */}
          <motion.g
            initial={{ scaleY: 0.95 }}
            animate={{ scaleY: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "80px 50px" }}
          >
            {/* Main lipstick shape - dome top */}
            <path
              d="M 65 50 Q 65 30 80 20 Q 95 30 95 50 L 95 90 Q 95 100 80 105 Q 65 100 65 90 Z"
              fill="url(#lipstickGradient)"
            />

            {/* Deep shadow on side */}
            <path
              d="M 65 50 Q 65 30 80 20 Q 75 35 75 50 L 75 90 Q 75 100 80 105 Q 70 100 70 90 Z"
              fill="#8B1432"
              opacity="0.4"
            />

            {/* Gloss/shine on top */}
            <ellipse cx="78" cy="35" rx="8" ry="10" fill="url(#glossGradient)" />

            {/* Center highlight line */}
            <path
              d="M 78 25 Q 78 40 77 60"
              stroke="#FFFFFF"
              strokeWidth="2"
              opacity="0.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Lower shine reflection */}
            <ellipse cx="80" cy="75" rx="6" ry="8" fill="url(#shineGradient)" opacity="0.6" />
          </motion.g>

          {/* Lipstick Tube */}
          <g>
            {/* Main tube body */}
            <rect x="60" y="90" width="40" height="85" fill="url(#tubeGradient)" rx="2" />

            {/* Tube side shadow */}
            <rect x="60" y="90" width="6" height="85" fill="#B8A89A" opacity="0.5" rx="2" />

            {/* Bottom of tube - metallic */}
            <ellipse cx="80" cy="175" rx="20" ry="4" fill="#C9A87C" />
            <ellipse cx="80" cy="173" rx="20" ry="3" fill="#E8D4C0" opacity="0.7" />

            {/* Tube text/logo area */}
            <rect x="62" y="120" width="36" height="15" fill="#D09163" opacity="0.3" rx="1" />

            {/* Decorative lines on tube */}
            <line x1="65" y1="105" x2="95" y2="105" stroke="#C9A87C" strokeWidth="1" opacity="0.5" />
            <line x1="65" y1="145" x2="95" y2="145" stroke="#C9A87C" strokeWidth="1" opacity="0.5" />
          </g>

          {/* Top Cap - screw cap */}
          <motion.g
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "80px 12px" }}
          >
            {/* Cap top */}
            <rect x="68" y="0" width="24" height="8" fill="url(#capGradient)" rx="1" />

            {/* Cap rim */}
            <ellipse cx="80" cy="8" rx="12" ry="3" fill="#2C1810" />
            <ellipse cx="80" cy="7" rx="12" ry="2" fill="#3D2817" opacity="0.6" />

            {/* Cap shine */}
            <ellipse cx="76" cy="3" rx="4" ry="2" fill="#FFFFFF" opacity="0.3" />
          </motion.g>

          {/* Highlight shimmer around lipstick */}
          <motion.g
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <circle cx="120" cy="60" r="3" fill="#FFB6C1" opacity="0.7" />
            <circle cx="35" cy="80" r="2.5" fill="#FFB6C1" opacity="0.5" />
          </motion.g>

          <motion.g
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
          >
            <circle cx="125" cy="120" r="2" fill="#E91E63" opacity="0.6" />
            <circle cx="30" cy="140" r="2.5" fill="#E91E63" opacity="0.4" />
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

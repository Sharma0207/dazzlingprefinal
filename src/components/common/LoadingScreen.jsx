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
        {/* Animated Makeup Bag Opening */}
        <motion.svg
          width="220"
          height="260"
          viewBox="0 0 220 260"
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
            cy="110"
            r="95"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.5, 1] }}
          />

          {/* MAKEUP BAG */}
          {/* Bag body - opened top */}
          <rect x="35" y="80" width="150" height="110" fill="#D4C4B0" rx="8" stroke="#B8A89A" strokeWidth="1.5" />

          {/* Bag side panel left */}
          <path d="M 35 80 L 25 70 L 25 170 L 35 190 Z" fill="#C4B4A0" stroke="#B8A89A" strokeWidth="1" />

          {/* Bag side panel right */}
          <path d="M 185 80 L 195 70 L 195 170 L 185 190 Z" fill="#C4B4A0" stroke="#B8A89A" strokeWidth="1" />

          {/* Bag bottom shine */}
          <ellipse cx="110" cy="190" rx="60" ry="8" fill="#E8D8C8" opacity="0.5" />

          {/* Handle on bag */}
          <path d="M 60 80 Q 110 40 160 80" fill="none" stroke="#B8A89A" strokeWidth="3" opacity="0.6" />

          {/* ZIPPER - Opening animation */}
          {/* Zipper slider */}
          <motion.circle
            cx="110"
            cy="80"
            r="4"
            fill="#A8916E"
            stroke="#8B7355"
            strokeWidth="1"
            animate={{ y: [0, 30, 30] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Zipper left side */}
          <motion.path
            d="M 100 80 L 100 170"
            stroke="#B8A89A"
            strokeWidth="2"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.3, 0.3] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* Zipper right side */}
          <motion.path
            d="M 120 80 L 120 170"
            stroke="#B8A89A"
            strokeWidth="2"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.3, 0.3] }}
            transition={{ duration: 2.5, times: [0, 0.3, 1] }}
          />

          {/* MAKEUP ITEM 1 - Lipstick (Left) */}
          <motion.g
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
            animate={{
              x: [-40, -50],
              y: [130, 80],
              rotate: [-20, -35],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 2.5, times: [0, 0.35, 1] }}
          >
            {/* Lipstick bullet */}
            <path
              d="M 45 85 Q 45 70 55 65 Q 65 70 65 85 L 65 115 Q 65 120 55 123 Q 45 120 45 115 Z"
              fill="#E91E63"
            />
            {/* Tube */}
            <rect x="45" y="115" width="20" height="30" fill="#D9C3A8" rx="1" />
          </motion.g>

          {/* MAKEUP ITEM 2 - Eyeshadow Palette (Center) */}
          <motion.g
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{
              x: [0, 0],
              y: [140, 70],
              scale: [0, 1, 1],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 2.5, times: [0, 0.4, 1] }}
          >
            {/* Palette base */}
            <circle cx="110" cy="90" r="22" fill="#F5E6D3" stroke="#D9C3A8" strokeWidth="1.5" />
            {/* Color swatch 1 */}
            <circle cx="100" cy="80" r="6" fill="#FFB6D9" />
            {/* Color swatch 2 */}
            <circle cx="120" cy="80" r="6" fill="#D09163" />
            {/* Color swatch 3 */}
            <circle cx="100" cy="100" r="6" fill="#2C1810" />
            {/* Color swatch 4 */}
            <circle cx="120" cy="100" r="6" fill="#8B4513" />
            {/* Highlight */}
            <circle cx="115" cy="85" r="3" fill="#FFFFFF" opacity="0.5" />
          </motion.g>

          {/* MAKEUP ITEM 3 - Makeup Brush (Right) */}
          <motion.g
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
            animate={{
              x: [40, 50],
              y: [130, 75],
              rotate: [20, 35],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 2.5, times: [0, 0.35, 1] }}
          >
            {/* Bristles */}
            <ellipse cx="160" cy="70" rx="6" ry="12" fill="#D09163" opacity="0.8" />
            {/* Ferrule */}
            <rect x="154" y="82" width="12" height="6" fill="#C9A87C" />
            {/* Handle */}
            <rect x="156" y="88" width="8" height="28" fill="#2D1810" rx="4" />
          </motion.g>

          {/* MAKEUP ITEM 4 - Mascara (Bottom Left) */}
          <motion.g
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [-45, -55],
              y: [145, 120],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 2.5, times: [0, 0.45, 1] }}
          >
            {/* Tube */}
            <rect x="40" y="115" width="8" height="25" fill="#1D1D1D" rx="2" />
            {/* Brush wand */}
            <line x1="44" y1="140" x2="44" y2="150" stroke="#1D1D1D" strokeWidth="1.5" />
          </motion.g>

          {/* MAKEUP ITEM 5 - Perfume/Highlighter (Bottom Right) */}
          <motion.g
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [45, 55],
              y: [150, 125],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 2.5, times: [0, 0.45, 1] }}
          >
            {/* Bottle */}
            <rect x="170" y="120" width="10" height="20" fill="#FFD5BB" stroke="#D09163" strokeWidth="1" rx="1" />
            {/* Cap */}
            <rect x="169" y="115" width="12" height="5" fill="#D09163" rx="1" />
            {/* Shine */}
            <rect x="172" y="120" width="2" height="18" fill="#FFFFFF" opacity="0.4" />
          </motion.g>

          {/* MAKEUP ITEM 6 - Blush Compact (Top Center) */}
          <motion.g
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{
              x: [0, 0],
              y: [120, 45],
              scale: [0, 1, 1],
              opacity: [0, 1, 1]
            }}
            transition={{ duration: 2.5, times: [0, 0.5, 1] }}
          >
            {/* Compact base */}
            <circle cx="110" cy="55" r="18" fill="#E8D4C0" stroke="#D9C3A8" strokeWidth="1.5" />
            {/* Blush color */}
            <circle cx="110" cy="55" r="14" fill="#FFB6D9" />
            {/* Highlight line */}
            <ellipse cx="105" cy="48" rx="5" ry="4" fill="#FFFFFF" opacity="0.6" />
          </motion.g>

          {/* Sparkle effects - Magic moment */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 1, 0.8, 1] }}
            transition={{ duration: 2.5, times: [0, 0.5, 0.65, 0.75, 0.9, 1] }}
          >
            <circle cx="40" cy="50" r="2" fill="#FFD5BB" />
            <circle cx="180" cy="50" r="2" fill="#D09163" />
            <circle cx="110" cy="30" r="2.5" fill="#FFB6D9" />
            <circle cx="30" cy="120" r="1.5" fill="#D09163" />
            <circle cx="190" cy="140" r="1.5" fill="#FFD5BB" />
            <circle cx="60" cy="220" r="1.5" fill="#D09163" />
            <circle cx="160" cy="210" r="1.5" fill="#FFB6D9" />
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

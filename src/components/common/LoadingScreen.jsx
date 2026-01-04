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
          width="120"
          height="200"
          viewBox="0 0 120 200"
          className="drop-shadow-lg"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Brush bristles */}
          <motion.g
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "60px 40px" }}
          >
            {/* Bristle texture - multiple strokes */}
            <ellipse cx="60" cy="35" rx="22" ry="28" fill="#D09163" opacity="0.9" />
            
            {/* Highlight on bristles */}
            <ellipse cx="55" cy="25" rx="12" ry="15" fill="#FFE4C4" opacity="0.6" />
            
            {/* Individual bristle lines */}
            <line x1="45" y1="50" x2="48" y2="65" stroke="#D09163" strokeWidth="1.5" opacity="0.7" />
            <line x1="60" y1="53" x2="60" y2="70" stroke="#D09163" strokeWidth="1.5" opacity="0.7" />
            <line x1="75" y1="50" x2="72" y2="65" stroke="#D09163" strokeWidth="1.5" opacity="0.7" />
            <line x1="50" y1="48" x2="50" y2="68" stroke="#D09163" strokeWidth="1" opacity="0.5" />
            <line x1="70" y1="48" x2="70" y2="68" stroke="#D09163" strokeWidth="1" opacity="0.5" />
          </motion.g>

          {/* Brush ferrule (metal part) */}
          <rect x="50" y="62" width="20" height="12" fill="#C0A080" rx="2" />
          <rect x="50" y="62" width="20" height="3" fill="#D4AF9F" opacity="0.6" />

          {/* Brush handle */}
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "60px 80px" }}
          >
            <rect x="54" y="74" width="12" height="90" fill="#2D1810" rx="6" />
            
            {/* Handle highlight */}
            <rect x="55" y="75" width="4" height="85" fill="#4A2C1F" opacity="0.7" rx="2" />
            
            {/* Decorative band */}
            <rect x="52" y="140" width="16" height="4" fill="#D09163" />
          </motion.g>

          {/* Sparkle effects around brush */}
          <motion.g
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <circle cx="90" cy="40" r="3" fill="#D09163" />
            <circle cx="30" cy="50" r="2.5" fill="#FFD5BB" />
          </motion.g>

          <motion.g
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          >
            <circle cx="95" cy="80" r="2" fill="#FFD5BB" />
            <circle cx="25" cy="100" r="2.5" fill="#D09163" />
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

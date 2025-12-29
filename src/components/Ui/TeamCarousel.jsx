"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const TeamCarousel = ({
  members,
  title = "OUR TEAM",
  titleSize = "2xl",
  titleColor = "rgba(0, 76, 255, 1)",
  background,
  cardWidth = 280,
  cardHeight = 380,
  cardRadius = 20,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 0,
  pauseOnHover = true,
  visibleCards = 2,
  sideCardScale = 0.9,
  sideCardOpacity = 0.8,
  grayscaleEffect = true,
  className,
  cardClassName,
  titleClassName,
  infoPosition = "bottom",
  infoTextColor = "rgb(8, 42, 123)",
  infoBackground = "transparent",
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalMembers = members.length;

  const paginate = useCallback(
    (newDirection) => {
      if (totalMembers === 0) return;
      setDirection(newDirection);
      const nextIndex =
        (currentIndex + newDirection + totalMembers) % totalMembers;
      setCurrentIndex(nextIndex);
      if (onMemberChange) {
        onMemberChange(members[nextIndex], nextIndex);
      }
    },
    [currentIndex, totalMembers, members, onMemberChange]
  );

  const wrapIndex = (index) => (index + totalMembers) % totalMembers;

  const calculatePosition = (index) => {
    const activeIndex = currentIndex;
    const diff = wrapIndex(index - activeIndex);

    if (diff === 0) return "center";
    if (diff <= visibleCards) return `right-${diff}`;
    if (diff >= totalMembers - visibleCards)
      return `left-${totalMembers - diff}`;
    return "hidden";
  };

  const getVariantStyles = (position) => {
    const transition = {
      duration: animationDuration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94],
    };

    switch (position) {
      case "center":
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1.1,
          x: 0,
          filter: "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "right-1":
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: cardWidth * 0.7,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "right-2":
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: cardWidth * 1.4,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "left-1":
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: -cardWidth * 0.7,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "left-2":
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: -cardWidth * 1.4,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      default:
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.8,
          x:
            direction > 0
              ? cardWidth * (visibleCards + 1)
              : -cardWidth * (visibleCards + 1),
          pointerEvents: "none",
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          transition,
        };
    }
  };

  useEffect(() => {
    let interval;
    if (autoPlay > 0) {
      interval = setInterval(() => paginate(1), autoPlay);
    }

    const el = document.getElementById("team-carousel-container");

    const handleEnter = () => {
      if (pauseOnHover) {
        clearInterval(interval);
      }
    };
    const handleLeave = () => {
      if (pauseOnHover && autoPlay > 0) {
        interval = setInterval(() => paginate(1), autoPlay);
      }
    };

    if (el && pauseOnHover) {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      clearInterval(interval);
      if (el && pauseOnHover) {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, [autoPlay, paginate, pauseOnHover]);

  useEffect(() => {
    if (!keyboardNavigation) return;

    const keyHandler = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [keyboardNavigation, paginate]);

  const handleTouchStart = (e) => {
    if (touchNavigation) {
      setTouchStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (touchNavigation) {
      setTouchEnd(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchNavigation) return;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
  };

  const titleSizeClasses = {
    sm: "text-4xl",
    md: "text-5xl",
    lg: "text-6xl",
    xl: "text-7xl",
    "2xl": "text-8xl",
  };

  return (
    <div
      id="team-carousel-container"
      className={cn(
        "min-h-screen flex flex-col items-center justify-center overflow-hidden relative transparent",
        className
      )}
      style={{ background }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {title && (
        <h2
          className={cn(
            "font-black uppercase tracking-tight absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap",
            titleSizeClasses[titleSize],
            titleClassName
          )}
          style={{
            color: "transparent",
            background: `linear-gradient(to bottom, ${titleColor}75 40%, transparent 76%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {title}
        </h2>
      )}

      <div
        className="w-full max-w-6xl relative mt-20"
        style={{ height: cardHeight + 100, perspective: "1000px" }}
      >
        {showArrows && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight />
            </motion.button>
          </>
        )}

        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <AnimatePresence initial={false}>
            {members.map((m, i) => {
              const pos = calculatePosition(i);
              const isActive = i === currentIndex;
              if (pos === "hidden" && !isActive) return null;

              return (
                <motion.div
                  key={m.id}
                  className={cn(
                    "absolute bg-white shadow-2xl cursor-pointer",
                    cardClassName
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: cardRadius,
                    top: "50%",
                    left: "50%",
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                  }}
                  initial={getVariantStyles("hidden")}
                  animate={getVariantStyles(pos)}
                  exit={getVariantStyles("hidden")}
                  onClick={() => {
                    if (!isActive) {
                      paginate(i > currentIndex ? 1 : -1);
                    }
                    if (onCardClick) {
                      onCardClick(m, i);
                    }
                  }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />

                  {infoPosition === "overlay" && (
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 text-center"
                      style={{
                        background:
                          infoBackground ||
                          "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        color: infoTextColor,
                      }}
                    >
                      <h3 className="text-lg font-bold">{m.name}</h3>
                      <p className="text-sm opacity-90">{m.role}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {infoPosition === "bottom" && members[currentIndex] && (
        <motion.div
          key={members[currentIndex].id + "-info"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-10"
        >
          <h2
            className="text-4xl font-bold mb-3"
            style={{ color: infoTextColor }}
          >
            {members[currentIndex].name}
          </h2>
          <p
            className="text-xl font-medium opacity-80 uppercase"
            style={{ color: infoTextColor }}
          >
            {members[currentIndex].role}
          </p>
          {members[currentIndex].bio && (
            <p className="text-base mt-4 max-w-lg mx-auto opacity-70">
              {members[currentIndex].bio}
            </p>
          )}
        </motion.div>
      )}

      {showDots && (
        <div className="flex justify-center gap-3 mt-14">
          {members.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => paginate(i > currentIndex ? 1 : -1)}
              className="w-3 h-3 rounded-full transition-all"
              whileTap={{ scale: 0.9 }}
              style={{
                background:
                  i === currentIndex ? infoTextColor : `${infoTextColor}40`,
                transform: `scale(${i === currentIndex ? 1.3 : 1})`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;

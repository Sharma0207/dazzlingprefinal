import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

export default function CounterStat({ value, label, prefix = "", gridClass = "" }) {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated && counterRef.current) {
      setHasAnimated(true);

      // Parse the value - handle cases like "120+" and "128,000"
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const hasPlus = value.includes("+");

      // Create a proxy object for the animation
      const obj = { count: 0 };

      gsap.to(obj, {
        count: numericValue,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            const displayValue = Math.floor(obj.count);

            // Format number with thousands separator
            if (displayValue >= 1000) {
              counterRef.current.textContent =
                displayValue.toLocaleString() + (hasPlus ? "+" : "");
            } else {
              counterRef.current.textContent = displayValue + (hasPlus ? "+" : "");
            }
          }
        },
      });
    }
  }, [isInView, hasAnimated, value]);

  return (
    <div ref={containerRef} className={gridClass}>
      <div className="mb-3">
        <h3 className="font-libre-franklin text-[45px] font-bold leading-[33px] text-black">
          {prefix && <span>{prefix} </span>}
          <span ref={counterRef} className="text-[#D09163]">
            0
          </span>
        </h3>
      </div>
      <p className="font-libre-franklin text-[17px] font-semibold leading-[17px] text-[#969696] uppercase">
        {label}
      </p>
    </div>
  );
}

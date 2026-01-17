import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoodlePattern from "./DoodlePattern";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Priyanka",
      role: "Professional Makeup Artist",
      image: "/src/assets/dazzling_images/testimonial/priyanka.jpeg",
      text: "The comprehensive bridal makeup training was exceptional. The hands-on practice with real clients gave me the confidence to launch my own studio successfully.",
    },
    {
      id: 2,
      name: "Nisha",
      role: "Freelance Beauty Consultant",
      image: "/src/assets/dazzling_images/testimonial/Nisha.jpeg",
      text: "The international certification was a game-changer for my career. I now work with top luxury salons and have clients worldwide thanks to this training.",
    },
    {
      id: 3,
      name: "Komal",
      role: "Salon Manager",
      image: "/src/assets/dazzling_images/testimonial/komal.jpeg",
      text: "The salon management and business skills course transformed how I run my salon. The expert guidance helped me build a profitable, professional beauty business.",
    },
    {
      id: 4,
      name: "Kumari Kanchan",
      role: "Hair Styling Expert",
      image: "/src/assets/dazzling_images/testimonial/kumari_kanchan.jpeg",
      text: "From fundamentals to advanced techniques, the curriculum covered everything. I gained certification and landed my dream job in a luxury spa within weeks.",
    },
    {
      id: 5,
      name: "Nishi",
      role: "Beauty Educator",
      image: "/src/assets/dazzling_images/testimonial/Nishi.jpeg",
      text: "The trainer program equipped me with skills to teach others. Now I run my own beauty workshops and mentor aspiring artists in my community.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = carousel.scrollWidth;
    const containerWidth = carousel.offsetWidth;
    let animationId;
    let scrollPos = 0;

    const autoScroll = () => {
      if (!isPaused) {
        scrollPos += 1;
        
        // Reset scroll position when reaching the middle (infinite loop)
        if (scrollPos >= totalWidth / 2) {
          scrollPos = 0;
        }

        carousel.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start animation
    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isPaused]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Doodle Pattern Background */}
      <DoodlePattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          {/* Testimonials Label with decorative lines */}
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <motion.div
              className="h-px w-5 md:w-6 bg-[#D09163]"
              initial={{ width: 0 }}
              whileInView={{ width: "1.375rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="font-libre-franklin font-medium text-[11px] md:text-[11.331px] text-[#D09163] uppercase tracking-[1px] mx-3 md:mx-4">
              Testimonials
            </span>
            <motion.div
              className="h-px w-5 md:w-6 bg-[#D09163]"
              initial={{ width: 0 }}
              whileInView={{ width: "1.375rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Main Heading */}
          <motion.h2
            className="font-playfair-display font-bold text-2xl sm:text-3xl md:text-[29px] text-[#424242] capitalize tracking-[1px] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            What Our Students Say ?
          </motion.h2>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="carousel-container flex gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollBehavior: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Render testimonials twice for infinite loop effect */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="testimonial-card flex-shrink-0 w-full sm:w-96 md:w-96 lg:w-96 bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    className="testimonial-avatar relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#FFD5BB] to-[#FFF2EA]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  <div className="profile-info">
                    <h3 className="profile-name font-libre-franklin font-bold text-base md:text-lg text-[#424242] mb-0.5">
                      {testimonial.name}
                    </h3>
                    <p className="profile-role font-libre-franklin font-normal text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <motion.p
                  className="testimonial-text font-libre-franklin font-normal text-sm md:text-[15px] text-[#424242] leading-relaxed line-clamp-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {testimonial.text}
                </motion.p>

                {/* Decorative quote mark */}
                <motion.div
                  className="quote-mark absolute top-4 right-4 text-6xl text-[#D09163] opacity-5 font-playfair-display leading-none"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  "
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative bottom accent */}
        <motion.div
          className="flex justify-center mt-8 md:mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D09163] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#D09163] animate-pulse" style={{ animationDelay: "75ms" }} />
            <div className="w-2 h-2 rounded-full bg-[#D09163] animate-pulse" style={{ animationDelay: "150ms" }} />
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        .carousel-container::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(208, 145, 99, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .testimonial-card:hover::before {
          left: 100%;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    id: 1,
    title: "Professional Makeup Artistry",
    description: "Master techniques for bridal, fashion, and special events",
    price: "₹12,999",
    image: "https://images.pexels.com/photos/10446994/pexels-photo-10446994.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
  {
    id: 2,
    title: "Bridal Makeup Specialist",
    description: "Expert training in traditional and modern bridal makeup",
    price: "₹14,999",
    image: "https://images.pexels.com/photos/4974344/pexels-photo-4974344.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Hair Styling & Design",
    description: "Cutting, coloring, and styling for all hair types",
    price: "₹11,999",
    image: "https://images.pexels.com/photos/7332328/pexels-photo-7332328.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
  {
    id: 4,
    title: "Advanced Skincare",
    description: "Professional training in skincare science and treatments",
    price: "₹13,999",
    image: "https://images.pexels.com/photos/9356712/pexels-photo-9356712.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "7 weeks",
  },
  {
    id: 5,
    title: "Nail Art & Extensions",
    description: "Master gel nails, extensions, and creative designs",
    price: "₹9,999",
    image: "https://images.pexels.com/photos/1934234/pexels-photo-1934234.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "5 weeks",
  },
  {
    id: 6,
    title: "Salon Management",
    description: "Learn to manage a salon and build your beauty brand",
    price: "₹15,999",
    image: "https://images.pexels.com/photos/8764616/pexels-photo-8764616.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "8 weeks",
  },
];

export default function Courses() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoplay, setAutoplay] = useState(true);

  // Handle responsive slides - 1 card on mobile/tablet, 3 on desktop
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, courses.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, slidesToShow]);

  const maxSlide = Math.max(0, courses.length - slidesToShow);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setAutoplay(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setAutoplay(false);
  };

  // GSAP animation for title
  useEffect(() => {
    const ctx = gsap.context(() => {
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

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="h-px bg-[#D09163]"
              style={{ width: 0 }}
              whileInView={{ width: "2.625rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="font-libre-franklin font-medium text-[11px] text-[#D09163] uppercase tracking-[1px] mx-4">
              Explore
            </span>
            <motion.div
              className="h-px bg-[#D09163]"
              style={{ width: 0 }}
              whileInView={{ width: "2.625rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            ref={titleRef}
            className="font-playfair-display font-bold text-3xl md:text-4xl lg:text-[42px] text-[#1D1D1D] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Beauty Courses That Transform
          </motion.h2>

          <motion.p
            className="font-libre-franklin text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Industry-leading courses designed by experts to jumpstart your beauty career
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#D09163] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous courses"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#D09163] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next courses"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Carousel */}
          <div className="overflow-hidden px-2 md:px-0">
            <motion.div
              className="flex gap-6"
              animate={{
                x: -currentSlide * (100 / slidesToShow),
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <AnimatePresence mode="wait">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / slidesToShow}% - ${
                        ((slidesToShow - 1) * 24) / slidesToShow
                      }px)`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoplay(false);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#D09163] w-8 h-2.5"
                    : "bg-[#D09163]/30 w-2.5 h-2.5"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  const [priceUnlocked, setPriceUnlocked] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col border border-gray-100"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gradient-to-br from-[#FFD5BB] to-[#FFF2EA]">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="font-libre-franklin text-xs font-semibold text-white bg-[#1D1D1D]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {course.duration}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-playfair-display font-bold text-lg md:text-xl text-[#1D1D1D] mb-3 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="font-libre-franklin text-sm text-gray-600 leading-relaxed mb-5 line-clamp-2 flex-grow">
          {course.description}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#D09163] to-[#FFD5BB] rounded-full mb-5" />

        {/* Price Section */}
        <div className="mb-6">
          <p className="font-libre-franklin text-xs text-gray-500 uppercase tracking-wider mb-2">
            Course Price
          </p>
          {priceUnlocked ? (
            <motion.p
              className="font-playfair-display text-2xl md:text-[26px] font-bold text-[#D09163]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {course.price}
            </motion.p>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="font-playfair-display text-2xl md:text-[26px] font-bold text-gray-400">
                ₹XXX
              </p>
              <p className="font-libre-franklin text-xs text-[#D09163] font-medium">
                Enquire to unlock price
              </p>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => setPriceUnlocked(!priceUnlocked)}
          className="w-full bg-[#1D1D1D] text-white font-plus-jakarta font-bold text-sm py-3 rounded-lg hover:bg-[#424242] transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {priceUnlocked ? "Hide Price" : "Enquire Now"}
        </motion.button>
      </div>
    </motion.div>
  );
}

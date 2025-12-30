import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  coursesData,
  COURSE_LEVELS,
  COURSE_CATEGORIES,
  MAIN_COURSES,
  getCoursesByLevelAndCategory,
  getAllMainCourses,
} from "../../data/coursesData";

gsap.registerPlugin(ScrollTrigger);

const levelOptions = [
  { value: "all", label: "All Courses" },
  { value: COURSE_LEVELS.BEGINNER, label: "Beginner" },
  { value: COURSE_LEVELS.BASIC, label: "Basic" },
  { value: COURSE_LEVELS.ADVANCE, label: "Advanced" },
];

const categoryOptions = [
  { value: "all", label: "All Categories" },
  { value: COURSE_CATEGORIES.SKIN, label: "Skin" },
  { value: COURSE_CATEGORIES.MAKEUP, label: "Makeup" },
  { value: COURSE_CATEGORIES.HAIR, label: "Hair" },
  { value: COURSE_CATEGORIES.NAILS, label: "Nails" },
];

export default function Courses() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoplay, setAutoplay] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter courses based on selections
  const getFilteredCourses = () => {
    if (selectedLevel === "all" && selectedCategory === "all") {
      return coursesData;
    }
    if (selectedLevel === "all") {
      return coursesData.filter((c) => c.category === selectedCategory);
    }
    if (selectedCategory === "all") {
      return coursesData.filter((c) => c.level === selectedLevel);
    }
    return getCoursesByLevelAndCategory(selectedLevel, selectedCategory);
  };

  const filteredCourses = getFilteredCourses();

  // Handle responsive slides
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        // Small Mobile: 1.5 slides (show next card partially)
        setSlidesToShow(1.5);
      } else if (window.innerWidth < 1024) {
        // Mobile & Tablet: 2 slides
        setSlidesToShow(2);
      } else {
        // Desktop: 3 slides
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Reset carousel when filters change
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedLevel, selectedCategory]);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, filteredCourses.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, slidesToShow, filteredCourses.length]);

  const maxSlide = Math.max(0, filteredCourses.length - slidesToShow);

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
        <div className="text-center mb-12">
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

        {/* Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-center mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-2 bg-[#D09163] text-white rounded-full font-semibold text-sm hover:bg-[#E8B998] transition-colors"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filters Container */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
              !showFilters ? "hidden lg:grid" : "grid"
            }`}
          >
            {/* Level Filter */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-[#1D1D1D] text-sm uppercase tracking-wider">
                Course Level
              </h3>
              <div className="flex flex-wrap gap-2">
                {levelOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => setSelectedLevel(option.value)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                      selectedLevel === option.value
                        ? "bg-[#D09163] text-white"
                        : "bg-gray-100 text-[#424242] hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-[#1D1D1D] text-sm uppercase tracking-wider">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => setSelectedCategory(option.value)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                      selectedCategory === option.value
                        ? "bg-[#D09163] text-white"
                        : "bg-gray-100 text-[#424242] hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-6 text-gray-600 font-libre-franklin">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
          </div>
        </motion.div>

        {/* Carousel Container */}
        {filteredCourses.length > 0 ? (
          <div className="relative group">
            {/* Navigation Buttons */}
            <motion.button
              onClick={handlePrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#D09163] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous courses"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#D09163] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next courses"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Mobile Navigation Buttons - Positioned inside carousel area */}
            <motion.button
              onClick={handlePrev}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-[#D09163] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous courses"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-[#D09163] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next courses"
            >
              <ChevronRight size={20} />
            </motion.button>

            {/* Carousel */}
            <div className="overflow-hidden w-full" ref={carouselRef}>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  transition: "transform 0.4s cubic-bezier(0.33, 0.66, 0.66, 1)",
                  transform: `translateX(calc(-${currentSlide * (100 / slidesToShow)}%))`,
                  width: "100%",
                }}
              >
                <AnimatePresence mode="wait">
                  {filteredCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      className="flex-shrink-0"
                      style={{
                        width: slidesToShow === 1 ? "100%" : `calc(${100 / slidesToShow}% - ${((slidesToShow - 1) * 24) / slidesToShow}px)`,
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
              </div>
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg font-libre-franklin">
              No courses found. Please try different filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  const getLevelBadgeColor = (level) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-700";
      case "basic":
        return "bg-blue-100 text-blue-700";
      case "advance":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatLevel = (level) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  const handleEnquireClick = () => {
    window.dispatchEvent(new Event("openEnquiryForm"));
  };

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

        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span className="font-libre-franklin text-xs font-semibold text-white bg-[#1D1D1D]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {course.duration}
          </span>
          <span
            className={`font-libre-franklin text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${getLevelBadgeColor(
              course.level
            )}`}
          >
            {formatLevel(course.level)}
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
        <p className="font-libre-franklin text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3 flex-grow">
          {course.description}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#D09163] to-[#FFD5BB] rounded-full mb-5" />

        {/* Price Section */}
        <div className="mb-6">
          <p className="font-libre-franklin text-xs text-gray-500 uppercase tracking-wider mb-2">
            Course Price
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-playfair-display text-2xl md:text-[26px] font-bold text-gray-400">
              ₹XXX
            </p>
            <p className="font-libre-franklin text-xs text-[#D09163] font-medium">
              Enquire to unlock price
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleEnquireClick}
          className="w-full bg-[#1D1D1D] text-white font-plus-jakarta font-bold text-sm py-3 rounded-lg hover:bg-[#424242] transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Enquire Now
        </motion.button>
      </div>
    </motion.div>
  );
}

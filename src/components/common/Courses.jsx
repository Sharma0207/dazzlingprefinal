import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const courses = [
    {
      id: 1,
      title: "Professional Makeup Artistry",
      description: "Master makeup techniques for bridal, fashion, and special occasions.",
      price: "₹12,999",
      image: "https://images.pexels.com/photos/10446994/pexels-photo-10446994.jpeg",
    },
    {
      id: 2,
      title: "Bridal Makeup Specialist",
      description: "Become an expert in traditional and modern bridal makeup techniques.",
      price: "₹14,999",
      image: "https://images.pexels.com/photos/4974344/pexels-photo-4974344.jpeg",
    },
    {
      id: 3,
      title: "Hair Styling & Design",
      description: "Learn cutting, coloring, and styling techniques for all hair types.",
      price: "₹11,999",
      image: "https://images.pexels.com/photos/7332328/pexels-photo-7332328.jpeg",
    },
    {
      id: 4,
      title: "Advanced Skincare & Aesthetics",
      description: "Professional training in skincare science and aesthetic treatments.",
      price: "₹13,999",
      image: "https://images.pexels.com/photos/9356712/pexels-photo-9356712.jpeg",
    },
    {
      id: 5,
      title: "Nail Art & Extension Techniques",
      description: "Master gel nails, extensions, and creative nail art designs.",
      price: "₹9,999",
      image: "https://images.pexels.com/photos/1934234/pexels-photo-1934234.jpeg",
    },
    {
      id: 6,
      title: "Beauty Business & Salon Management",
      description: "Learn to manage a salon and build your beauty brand professionally.",
      price: "₹15,999",
      image: "https://images.pexels.com/photos/8764616/pexels-photo-8764616.jpeg",
    },
  ];

  const filteredCourses = courses;

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxSlides = Math.max(0, filteredCourses.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

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
    <section
      ref={sectionRef}
      className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Discover Label with decorative lines */}
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <motion.div
              className="h-px w-10 md:w-[42px] bg-[#D09163] bg-opacity-60"
              initial={{ width: 0 }}
              whileInView={{ width: "2.625rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="font-libre-franklin font-medium text-[11px] md:text-[11.331px] text-[#D09163] uppercase tracking-[1px] mx-3 md:mx-4">
              Discover
            </span>
            <motion.div
              className="h-px w-10 md:w-[42px] bg-[#D09163] bg-opacity-60"
              initial={{ width: 0 }}
              whileInView={{ width: "2.625rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Main Heading */}
          <motion.h2
            ref={titleRef}
            className="font-playfair-display font-bold text-2xl sm:text-3xl md:text-[29px] text-[#424242] capitalize tracking-[1px] leading-[31px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Our Beauty Courses
          </motion.h2>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Arrows */}
          {filteredCourses.length > slidesToShow && (
            <>
              {/* Left Arrow */}
              <motion.button
                onClick={prevSlide}
                className="nav-arrow nav-arrow-left absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-[34px] md:h-[34px] lg:-left-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                aria-label="Previous courses"
              >
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <circle
                    cx="19.8025"
                    cy="16.9024"
                    r="16.9024"
                    fill="white"
                    transform="matrix(-1 0 0 1 39.605 0)"
                  />
                  <path
                    d="M15.8848 18.0354L20.9218 13.068L19.594 11.7585L12.2902 18.9615L19.594 26.1644L20.9218 24.855L15.8848 19.8876H27.3146V18.0354H15.8848Z"
                    fill="black"
                  />
                </svg>
              </motion.button>

              {/* Right Arrow */}
              <motion.button
                onClick={nextSlide}
                className="nav-arrow nav-arrow-right absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-[34px] md:h-[34px] lg:-right-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                aria-label="Next courses"
              >
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <circle cx="19.8025" cy="16.9024" r="16.9024" fill="white" />
                  <path
                    d="M23.7201 18.0354L18.6832 13.068L20.0109 11.7585L27.3147 18.9615L20.0109 26.1644L18.6832 24.855L23.7201 19.8876H12.2903V18.0354H23.7201Z"
                    fill="black"
                  />
                </svg>
              </motion.button>
            </>
          )}

          {/* Course Cards Carousel */}
          <div className="overflow-hidden px-0 sm:px-2 md:px-4">
            <motion.div
              ref={carouselRef}
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              <AnimatePresence mode="wait">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    className="course-card flex-shrink-0"
                    style={{
                      width: `calc(${100 / slidesToShow}% - ${
                        ((slidesToShow - 1) * (slidesToShow === 1 ? 0 : 24)) /
                        slidesToShow
                      }px)`,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    {/* Course Image */}
                    <div className="course-image-wrapper relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#FFD5BB] to-[#FFF2EA] aspect-[285/398]">
                      <motion.img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        loading="lazy"
                      />
                    </div>

                    {/* Course Content */}
                    <div className="course-content bg-white rounded-b-2xl p-5 md:p-6 shadow-sm border border-gray-100 border-t-0 flex flex-col h-full">
                      <h3 className="course-title font-plus-jakarta font-bold text-base md:text-lg text-[#1D1D1D] mb-2 leading-tight line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="course-description font-libre-franklin text-sm md:text-[14px] text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {course.description}
                      </p>

                      {/* Price Section */}
                      <div className="price-section mb-5 pt-4 border-t border-gray-200">
                        <p className="font-libre-franklin text-xs md:text-[12px] text-gray-500 uppercase tracking-wide mb-1">
                          Course Price
                        </p>
                        <p className="font-playfair-display text-2xl md:text-[24px] font-bold text-[#D09163]">
                          {course.price}
                        </p>
                      </div>

                      {/* Enquire Now Button */}
                      <motion.button
                        className="enquire-button w-full bg-[#1D1D1D] hover:bg-[#424242] text-[#FEFEFE] font-plus-jakarta font-bold text-sm md:text-[14.4px] leading-[14.4px] px-4 py-3 md:py-[12.73px] rounded-[10px] transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Enquire Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Apply Now Button */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="apply-now-button bg-[#1D1D1D] hover:bg-[#424242] text-[#FEFEFE] font-plus-jakarta font-bold text-sm md:text-[14.4px] leading-[14.4px] px-6 md:px-[15.4px] py-3 md:py-[12.73px] rounded-[10px] transition-all duration-300 min-w-[108px]"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .nav-arrow {
          filter: drop-shadow(1px 5px 3.9px rgba(0, 0, 0, 0.25));
        }

        .course-card {
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .course-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #D09163, #FFD5BB);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 0 0 1rem 1rem;
        }

        .course-card:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
}

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

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

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

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

        {/* Slider Container */}
        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <motion.button
            ref={prevRef}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#D09163] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous courses"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            ref={nextRef}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#D09163] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next courses"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Swiper */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, Lazy]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} cursor-pointer"></span>`,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="pb-20"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8 absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-custom span) {
          width: 10px;
          height: 10px;
          background-color: #D09163;
          border-radius: 50%;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-custom span.swiper-pagination-bullet-active) {
          opacity: 1;
          width: 28px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100"
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
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Duration Badge */}
        <div className="inline-flex items-center gap-2 mb-3 w-fit">
          <span className="font-libre-franklin text-xs font-medium text-[#D09163] bg-[#FFD5BB]/30 px-3 py-1 rounded-full">
            {course.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-playfair-display font-bold text-lg md:text-xl text-[#1D1D1D] mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="font-libre-franklin text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#D09163] to-[#FFD5BB] rounded-full mb-4" />

        {/* Price */}
        <div className="mb-6">
          <p className="font-libre-franklin text-xs text-gray-500 uppercase tracking-wider mb-1">
            Starting at
          </p>
          <p className="font-playfair-display text-2xl font-bold text-[#D09163]">
            {course.price}
          </p>
        </div>

        {/* CTA Button */}
        <motion.button
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

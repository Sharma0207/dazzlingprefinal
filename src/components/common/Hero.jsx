import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { openWhatsApp, openWhatsAppWithCourse } from "../../utils/whatsapp";
import hero1 from "../../assets/dazzling_images/Hero/hero1.jpeg";
import hero2 from "../../assets/dazzling_images/Hero/hero2.jpg";
import hero3 from "../../assets/dazzling_images/Hero/hero3.png";
import hero4 from "../../assets/dazzling_images/Hero/hero4.png";
import makeup6 from "../../assets/dazzling_images/Hero/makeup6.jpg";
import con2 from "../../assets/dazzling_images/Hero/con2.jpeg";
import hero7 from "../../assets/dazzling_images/Hero/hero7.jpg";

export default function Hero() {
  const images = [
    {
      src: hero7,
      rotation: "-11deg",
      left: "0%",
    },
    {
      src: hero2,
      rotation: "-8.537deg",
      left: "15.5%",
    },
    {
      src: hero3,
      rotation: "-7.12deg",
      left: "30.8%",
    },
    {
      src: hero1,
      rotation: "-0.514deg",
      left: "47.1%",
    },
    {
      src: con2,
      rotation: "8.758deg",
      left: "60.9%",
    },
    {
      src: makeup6,
      rotation: "10.645deg",
      left: "75.8%",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFD5BB] via-[#FFF2EA] to-[#FFF7F2] overflow-hidden pt-20 md:pt-24">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 lg:pb-24">
        {/* Main Heading */}
        <motion.h1
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block font-playfair-display text-4xl sm:text-5xl md:text-6xl lg:text-[71px] font-bold leading-tight text-black capitalize">
            Welcome to{" "}
            <motion.span
              className="text-[#D09163]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dazzling World !
            </motion.span>
          </span>
        </motion.h1>

        {/* Image Gallery */}
        <div className="relative mx-auto mb-8 md:mb-12 lg:mb-16 max-w-5xl">
          {/* Desktop View - Tilted Images with Spread Animation */}
          <div className="hidden md:block relative h-64 lg:h-72">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute top-0 w-44 lg:w-52 h-44 lg:h-52"
                style={{
                  left: image.left,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -80,
                  y: 60,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: parseFloat(image.rotation),
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.12,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  y: -12,
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile & Tablet View - Grid with Spread Animation */}
          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square"
                initial={{
                  opacity: 0,
                  scale: 0.3,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  scale: 1.12,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description Text */}
        <motion.div
          className="max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-center font-sf-pro text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed md:leading-[42px] text-black">
            Transform your passion for beauty into a thriving career. Master
            professional makeup, hairstyling, skincare, and business skills with
            our internationally certified courses and expert trainers.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center justify-center px-6 md:px-[15.4px] py-3 md:py-[12.73px] bg-[#1D1D1D] rounded-[10px] hover:bg-[#2D2D2D] transition-colors shadow-md"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-plus-jakarta text-sm md:text-[14.4px] font-bold text-[#FEFEFE] leading-[14.4px]">
              Book a call with our experts
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#FFD1B5]/20 to-transparent opacity-60"></div>
      </div>
    </div>
  );
}

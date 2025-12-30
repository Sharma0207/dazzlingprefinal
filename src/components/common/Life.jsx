import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import DoodlePattern from "./DoodlePattern";

// Original Image Imports (kept exactly as before)
import con1 from "../../../dazzling_images/con1.jpeg";
import con2 from "../../../dazzling_images/con2.jpeg";
import con3 from "../../../dazzling_images/con3.jpeg";
import con4 from "../../../dazzling_images/con4.jpeg";
import fun1 from "../../../dazzling_images/fun1.jpeg";
import hero1 from "../../../dazzling_images/hero1.jpeg";
import whatsapp1 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.12.46 PM.jpeg";
import whatsapp2 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.12.58 PM.jpeg";
import whatsapp3 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.13.08 PM.jpeg";
import whatsapp4 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.13.24 PM.jpeg";
import whatsapp5 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.17.30 PM.jpeg";
import whatsapp6 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.17.31 PM.jpeg";

// Makeup Images
import makeup1 from "../../assets/dazzling_images/makeup/500948739_2308675349534789_4544371380057854544_n.jpg";
import makeup2 from "../../assets/dazzling_images/makeup/501022971_2450777148623937_8601924468688542799_n.jpg";
import makeup3 from "../../assets/dazzling_images/makeup/hero2.jpg";
import makeup4 from "../../assets/dazzling_images/makeup/hero7.jpg";
import makeup5 from "../../assets/dazzling_images/makeup/makeup5.jpg";
import makeup6 from "../../assets/dazzling_images/makeup/makeup6.jpg";
import makeup7 from "../../assets/dazzling_images/makeup/makeup7.jpg";
import makeup8 from "../../assets/dazzling_images/makeup/makeup8.jpg";

// Your Local Reels
import reel1 from "../../assets/reel/Video-412.mp4";
import reel2 from "../../assets/reel/Video-448.mp4";
import reel3 from "../../assets/reel/Video-861.mp4";
import reel4 from "../../assets/reel/Video-362.mp4";
import reel5 from "../../assets/reel/Video-488.mp4";
import reel6 from "../../assets/reel/reel4.mp4";

const galleryImages = [
  { src: con1, alt: "Academy Moment 1" },
  { src: con2, alt: "Academy Moment 2" },
  { src: con3, alt: "Academy Moment 3" },
  { src: con4, alt: "Academy Moment 4" },
  { src: fun1, alt: "Academy Moment 5" },
  { src: hero1, alt: "Academy Moment 6" },
  { src: whatsapp1, alt: "Academy Moment 7" },
  { src: whatsapp2, alt: "Academy Moment 8" },
  { src: whatsapp3, alt: "Academy Moment 9" },
  { src: whatsapp4, alt: "Academy Moment 10" },
  { src: whatsapp5, alt: "Academy Moment 11" },
  { src: whatsapp6, alt: "Academy Moment 12" },
  { src: makeup1, alt: "Makeup Moment 1" },
  { src: makeup2, alt: "Makeup Moment 2" },
  { src: makeup3, alt: "Makeup Moment 3" },
  { src: makeup4, alt: "Makeup Moment 4" },
  { src: makeup5, alt: "Makeup Moment 5" },
  { src: makeup6, alt: "Makeup Moment 6" },
  { src: makeup7, alt: "Makeup Moment 7" },
  { src: makeup8, alt: "Makeup Moment 8" },
];

const localReels = [
  { id: "1", src: reel6, caption: "Dazzling Reel 1" },
  { id: "2", src: reel2, caption: "Dazzling Reel 2" },
  { id: "3", src: reel3, caption: "Dazzling Reel 3" },
  { id: "4", src: reel4, caption: "Dazzling Reel 4" },
  { id: "5", src: reel5, caption: "Dazzling Reel 5" },
  { id: "6", src: reel1, caption: "Dazzling Reel 6" },
];

const Life = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, []);

  // Auto-rotate videos every 8 seconds (longer for real videos)
  useEffect(() => {
    const videoTimer = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % localReels.length);
    }, 8000);
    return () => clearInterval(videoTimer);
  }, []);

  const goToPreviousImage = () => {
    setImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPreviousVideo = () => {
    setVideoIndex((prev) => (prev === 0 ? localReels.length - 1 : prev - 1));
  };

  const goToNextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % localReels.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, videoIndex]);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FFF7F2] to-white">
      {/* Decorative Doodle Pattern */}
      <DoodlePattern className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-libre-franklin text-[#D09163] font-medium text-[11.331px] uppercase tracking-[1px] leading-[31px] mb-3 md:mb-4">
            Moments & Stories
          </p>
          <h2 className="font-playfair-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#424242] capitalize tracking-[1px] leading-tight">
            Life <span className="text-[#D09163]">@Dazzling</span>
          </h2>
        </div>

        {/* Gallery Container - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Image Carousel (Left) */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square bg-gray-100">
              <div className="relative w-full h-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === imageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {imageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Navigation Arrows - Image */}
            <button
              onClick={goToPreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation - Image */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === imageIndex
                      ? "bg-[#D09163] w-3 h-3"
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Video/Reel Carousel (Right) */}
          <div className="relative group mx-auto w-full max-w-xs">
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100"
              style={{ aspectRatio: "9 / 16" }}
            >
              <div className="relative w-full h-full">
                {localReels.map((reel, index) => (
                  <div
                    key={reel.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === videoIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <video
                      src={reel.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    {/* Optional Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">
                        {reel.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {videoIndex + 1} / {localReels.length}
              </div>
            </div>

            {/* Navigation Arrows - Video */}
            {localReels.length > 1 && (
              <>
                <button
                  onClick={goToPreviousVideo}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Previous reel"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNextVideo}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Next reel"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Navigation - Video */}
                <div className="flex justify-center gap-2 mt-6">
                  {localReels.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setVideoIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === videoIndex
                          ? "bg-[#D09163] w-3 h-3"
                          : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to reel ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16">
          <a
            href="https://www.instagram.com/dazzlingworldacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D09163] to-[#E8B998] text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Follow Our Journey</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 12l-4.397 4.397a.999.999 0 11-1.414-1.414L14.628 12l-3.998-3.998a.999.999 0 111.414-1.414L16.441 12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Life;

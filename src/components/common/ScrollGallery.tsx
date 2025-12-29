import { ThreeDMarquee, MarqueeImage } from "../lightswind/3d-marquee";

// Import images from dazzling_images
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

const galleryImages: MarqueeImage[] = [
  {
    src: con1,
    alt: "Concept Image 1",
  },
  {
    src: con2,
    alt: "Concept Image 2",
  },
  {
    src: con3,
    alt: "Concept Image 3",
  },
  {
    src: con4,
    alt: "Concept Image 4",
  },
  {
    src: fun1,
    alt: "Fun Image 1",
  },
  {
    src: hero1,
    alt: "Hero Image 1",
  },
  {
    src: whatsapp1,
    alt: "Gallery Image 1",
  },
  {
    src: whatsapp2,
    alt: "Gallery Image 2",
  },
  {
    src: whatsapp3,
    alt: "Gallery Image 3",
  },
  {
    src: whatsapp4,
    alt: "Gallery Image 4",
  },
  {
    src: whatsapp5,
    alt: "Gallery Image 5",
  },
  {
    src: whatsapp6,
    alt: "Gallery Image 6",
  },
];

function ScrollGallery() {
  return (
    <div className="w-full">
      <ThreeDMarquee
        images={galleryImages}
        onImageClick={(image, index) => {
          console.log("Clicked:", image.alt, "at index:", index);
        }}
      />
    </div>
  );
}

export default ScrollGallery;

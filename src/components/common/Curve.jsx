import { Instagram } from "lucide-react";
import BookCallButton from "../Ui/BookCallButton";
import DoodlePattern from "./DoodlePattern";

export default function Curve() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 ">
      {/* Doodle Pattern Background */}
      <DoodlePattern />

      {/* Curved Top Black Shape */}
      <div className="absolute top-0 left-0 w-full h-40  rounded-b-[50%] z-40" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/34cdb507f8835b1795d78a37855c6fc870505b12?width=2880"
          alt="Beauty academy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blur effect mask */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Curved Bottom Black Shape */}
      <div className="absolute bottom-0 left-0 w-full h-40  rounded-t-[50%] z-40" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl rounded-3xl px-8 md:px-16 py-10 md:py-14 text-center">
          <h2 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
            Take the Next Step
          </h2>

          <p className="font-libre-franklin mt-4 text-lg text-black font-semibold">
            So are you ready to take your next leap and start training in
            something new?
          </p>

          <p className="font-libre-franklin mt-3 text-gray-700 text-base max-w-2xl mx-auto leading-relaxed">
            If you like what you’ve seen why not take the next step and book a
            place with us. Click the button below and simply fill in the booking
            form.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <BookCallButton text="Book Now" openForm={true} />

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-black/60" />

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dazzlingworldacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-700 transition group"
              aria-label="Visit Dazzling World Academy on Instagram"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-karla text-base tracking-wide">
                Find Us On Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

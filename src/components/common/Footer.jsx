import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="relative py-16 md:py-20"
      style={{
        background: 'radial-gradient(120.43% 54.96% at 50% 50%, #FFD1B5 15%, #FFF7F2 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[145px]">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/512c32ca07ef2d11f633b2dd668aedbc3c9d7a94?width=166"
            alt="Dazzling World Logo"
            className="w-[83px] h-[87px]"
          />
        </div>


        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 pb-12 border-b border-[#707070]">
          {/* Contact Column */}
          <div className="max-w-[483px]">
            <h3 className="font-plus-jakarta text-[18px] font-bold text-[#1D1D1D] leading-[19.8px] mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-plus-jakarta text-[16px] text-[#1D1D1D] leading-[22.4px]">
                  <span className="font-bold">PATNA CAMPUS</span>
                  <br />
                  <span className="font-medium">5th Floor, AP Complex, Bailey Road Near Ranjan Path, Patna, Bihar - 801503</span>
                </p>
              </div>
              <div>
                <p className="font-plus-jakarta text-[16px] text-[#1D1D1D] leading-[22.4px]">
                  <span className="font-bold">HYDERABAD CAMPUS</span>
                  <br />
                  <span className="font-medium">Banjara Hills, Hyderabad - 500034</span>
                </p>
              </div>
              <div className="flex items-start gap-1">
                <span className="font-plus-jakarta text-[16px] font-bold text-[#1D1D1D] leading-[25.6px]">
                  Administration:
                </span>
                <a
                  href="mailto:admin@dazlingworld.in"
                  className="font-plus-jakarta text-[16px] font-medium text-[#D09163] hover:underline leading-[25.6px]"
                >
                  admin@dazlingworld.in
                </a>
              </div>
              <div className="flex items-start gap-1">
                <span className="font-plus-jakarta text-[16px] font-bold text-[#1D1D1D] leading-[25.6px]">
                  Course enquiries:
                </span>
                <a
                  href="mailto:admission@dazlingworld.in"
                  className="font-plus-jakarta text-[16px] font-medium text-[#D09163] hover:underline leading-[25.6px]"
                >
                  admission@dazlingworld.in
                </a>
              </div>
              <div>
                <p className="font-plus-jakarta text-[16px] text-[#1D1D1D] leading-[25.6px]">
                  <span className="font-bold">General/Course Enquiries:</span>
                  <span className="font-medium"> +91 7324 012345</span>
                </p>
              </div>
              <div>
                <p className="font-plus-jakarta text-[16px] text-[#1D1D1D] leading-[25.6px]">
                  <span className="font-bold">Toll Free:</span>
                  <span className="font-medium"> 1800 123 4747</span>
                </p>
              </div>
            </div>
          </div>

          {/* Follow Column */}
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <h3 className="font-plus-jakarta text-[18px] font-bold text-[#1D1D1D] leading-[19.8px] mb-4">
              Follow
            </h3>
            <div className="flex gap-0 flex-wrap justify-center">
              <a
                href="https://www.instagram.com/dazzlingworldacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D09163] hover:text-[#B87D4F] transition-colors p-[11.69px]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/dazzlingworldacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D09163] hover:text-[#B87D4F] transition-colors p-[11.69px]"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Google Map Column */}
          <div className="max-w-[472px]">
            <h3 className="font-plus-jakarta text-[18px] font-bold text-[#1D1D1D] leading-[19.8px] mb-4">
              Find Us
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 w-full">
              <iframe
                title="Dazzling World Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.081551535340!2d85.051919407719!3d25.615988112666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDazzling%20World%20Academy!2s25.61598811266598%2C%2085.05191940772254!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="font-poppins text-[18px] text-black leading-[19px] tracking-[1.44px] capitalize">
            Developed By: Team Flexirl.com
          </p>
        </div>
      </div>
    </footer>
  );
}

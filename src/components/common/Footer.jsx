import { Instagram, Facebook, Youtube } from "lucide-react";

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

        {/* Top Navigation Links */}
        <div className="border-b border-[#707070] pb-8 md:pb-10 mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center items-center gap-x-0">
        
            <a
              href="#"
              className="font-plus-jakarta text-[16px] font-medium text-[#1D1D1D] hover:text-[#D09163] transition-colors px-4 py-[11.2px] leading-[16px]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-plus-jakarta text-[16px] font-medium text-[#1D1D1D] hover:text-[#D09163] transition-colors px-4 py-[11.2px] leading-[16px]"
            >
              Complaints Policy
            </a>
            <a
              href="#"
              className="font-plus-jakarta text-[16px] font-medium text-[#1D1D1D] hover:text-[#D09163] transition-colors px-4 py-[11.2px] leading-[16px]"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="font-plus-jakarta text-[16px] font-medium text-[#1D1D1D] hover:text-[#D09163] transition-colors px-4 py-[11.2px] leading-[16px]"
            >
              Sitemap
            </a>
          </div>
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
                href="#"
                className="text-[#D09163] hover:text-[#B87D4F] transition-colors p-[11.69px]"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#D09163] hover:text-[#B87D4F] transition-colors p-[11.69px]"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#D09163] hover:text-[#B87D4F] transition-colors p-[11.69px]"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="max-w-[472px]">
            <h3 className="font-plus-jakarta text-[18px] font-bold text-[#1D1D1D] leading-[19.8px] mb-4">
              Newsletter
            </h3>
            <p className="font-plus-jakarta text-[16px] font-medium text-[#1D1D1D] leading-[25.6px] mb-4">
              To get the exclusive news, blogs and events from our academy
            </p>

            {/* Newsletter Form */}
            <div className="space-y-4">
              {/* Privacy Policy Radio Button */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="radio"
                    id="privacy"
                    name="privacy"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="privacy"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full border-[3px] border-[#D09163] bg-[#FEFEFE] flex items-center justify-center peer-checked:bg-[#D09163]">
                      <div className="w-2 h-2 rounded-full bg-transparent peer-checked:bg-white"></div>
                    </div>
                    <span className="font-plus-jakarta text-[16px] font-medium text-[#1D1D1D] leading-[28.8px]">
                      I agree to the privacy policy.
                    </span>
                  </label>
                </div>
              </div>

              {/* reCAPTCHA */}
              <div className="bg-[#F9F9F9] border border-[#D3D3D3] rounded-[3px] p-3 shadow-sm max-w-[304px]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <div className="w-7 h-7 border-2 border-[#444746] bg-white rounded-sm"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-roboto text-[14px] text-black leading-[17px]">
                      I'm not a robot
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/edaa42a7158f1cd6595d61d41db4f9c24d2c9b35?width=64"
                      alt="reCAPTCHA"
                      className="w-8 h-8"
                    />
                    <span className="font-roboto text-[10px] text-[#555] leading-[10px]">
                      reCAPTCHA
                    </span>
                  </div>
                </div>
                <div className="mt-1 text-right">
                  <span className="font-roboto text-[8px] text-[#555]">
                    Privacy - Terms
                  </span>
                </div>
              </div>

              {/* Email Input with Signup Button */}
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-[11px] border border-[#1D1D1D] rounded-l-[20px] font-plus-jakarta text-[15px] font-medium text-[#1D1D1D] placeholder-[#1D1D1D] bg-[#FEFEFE] focus:outline-none focus:ring-2 focus:ring-[#D09163]"
                />
                <button className="px-[15.4px] py-[12.73px] bg-[#1D1D1D] text-[#FEFEFE] rounded-r-[20px] font-plus-jakarta font-bold text-[14.4px] leading-[14.4px] hover:bg-[#2D2D2D] transition-colors">
                  Signup
                </button>
              </div>
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

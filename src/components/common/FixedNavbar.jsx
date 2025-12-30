import { useScrollSection } from '../../hooks/useScrollSection';
import { HamburgerMenuOverlay } from '../lightswind/hamburger-menu-overlay';
import { useState, useEffect } from 'react';

export default function FixedNavbar() {
  const activeSection = useScrollSection();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past initial area → hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up → show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const sectionColors = {
    hero: { bg: 'from-[#FFD5BB] via-[#FFF2EA] to-[#FFF7F2]', text: '#000000' },
    afterhero: { bg: 'bg-white', text: '#000000' },
    mission: { bg: 'bg-white', text: '#000000' },
    courses: { bg: 'bg-[#FFF7F2]', text: '#000000' },
    awards: { bg: 'bg-white', text: '#000000' },
    team: { bg: 'bg-[#FFF7F2]', text: '#000000' },
    life: { bg: 'from-[#FFF7F2] to-white', text: '#000000' },
    testimonial: { bg: 'bg-white', text: '#000000' },
    process: { bg: 'bg-[#FFF7F2]', text: '#000000' },
    faq: { bg: 'bg-white', text: '#000000' },
    footer: { bg: 'from-[#FFD1B5] via-[#FFF7F2] to-[#FFF7F2]', text: '#FFFFFF' },
  };

  const colors = sectionColors[activeSection] || sectionColors.hero;
  const isGradient = colors.bg.includes('from-');
  const textColor = colors.text;

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#afterhero' },
    { label: 'Mission', href: '#mission' },
    { label: 'Life @Dazzling', href: '#life' },
    { label: 'Courses', href: '#courses' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out ${
        isGradient ? `bg-gradient-to-r ${colors.bg}` : colors.bg
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.7s ease-in-out' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24">
        <div className="flex items-center justify-between h-full relative">
          {/* Hamburger Menu */}
          <div className="flex items-center mt-10">
            <HamburgerMenuOverlay
              items={menuItems}
              buttonTop="28px"
              buttonLeft="24px"
              buttonSize="md"
              buttonColor="#D09163"
              overlayBackground="rgba(0, 0, 0, 0.9)"
              textColor="#ffffff"
              fontSize="lg"
              fontWeight="medium"
              animationDuration={0.6}
              staggerDelay={0.1}
              menuAlignment="left"
              keepOpenOnItemClick={false}
            />
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e1de6b2f2b99de374eacb331d5918da7632c368e"
              alt="Dazzling World Logo"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
          </div>

          {/* Right Side - Phone & Enquire Button */}
          <div className="flex items-center gap-3 md:gap-5 relative" style={{ zIndex: 1001 }}>
            <div className="hidden lg:flex items-center gap-2">
              <svg
                className="w-5 h-5 fill-[#D09163] transition-colors duration-300"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.9485 16.6051C21.6921 16.332 20.7871 15.5247 19.1233 14.4566C17.4472 13.3792 16.2112 12.7074 15.8566 12.5507C15.8253 12.5369 15.7909 12.5318 15.757 12.536C15.7231 12.5403 15.691 12.5537 15.6641 12.5748C15.093 13.0202 14.1314 13.8383 14.0798 13.8825C13.7469 14.1679 13.7469 14.1679 13.4743 14.079C12.995 13.9218 11.5061 13.1312 10.2086 11.8308C8.91118 10.5304 8.07978 9.00463 7.92263 8.52583C7.83276 8.25279 7.83276 8.25279 8.11906 7.91983C8.16326 7.86827 8.9819 6.90673 9.42731 6.3361C9.44844 6.30923 9.46184 6.27711 9.46608 6.24319C9.47032 6.20927 9.46523 6.17484 9.45138 6.14359C9.29472 5.78854 8.62292 4.55298 7.54548 2.87692C6.47589 1.21363 5.66953 0.308573 5.39649 0.0522287C5.37143 0.0285846 5.34046 0.0121364 5.30684 0.00461737C5.27322 -0.0029017 5.2382 -0.00121323 5.20546 0.00950469C4.25103 0.337504 3.33015 0.756009 2.45539 1.25931C1.61093 1.7502 0.81145 2.31468 0.0662594 2.94617C0.0402466 2.96828 0.0207441 2.99706 0.00984345 3.02942C-0.00105723 3.06177 -0.00294487 3.09648 0.00438286 3.12983C0.10702 3.60814 0.597613 5.60488 2.11997 8.37065C3.67327 11.1934 4.74973 12.6396 7.03082 14.9128C9.31191 17.186 10.8038 18.3273 13.6295 19.8806C16.3953 21.4029 18.393 21.894 18.8704 21.9957C18.9038 22.0029 18.9386 22.001 18.971 21.9901C19.0034 21.9792 19.0323 21.9598 19.0545 21.9338C19.6859 21.1886 20.2502 20.3892 20.7409 19.5447C21.2441 18.6699 21.6626 17.749 21.9907 16.7946C22.0012 16.7622 22.0028 16.7274 21.9954 16.6941C21.988 16.6608 21.9718 16.6301 21.9485 16.6051Z" />
              </svg>
              <span
                className="font-libre-franklin text-sm font-semibold transition-colors duration-500"
                style={{ color: textColor }}
              >
                1800 123 4747
              </span>
            </div>

            <button
              type="button"
              className="px-4 md:px-6 py-2.5 bg-[#1D1D1D] rounded-lg hover:bg-[#2D2D2D] transition-all duration-300 text-white font-libre-franklin text-sm font-bold shadow-md hover:shadow-lg"
              onClick={() => {
                console.log("Enquire button clicked");
                window.dispatchEvent(new CustomEvent('openEnquiryForm'));
              }}
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

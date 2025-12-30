import { ArrowRight } from "lucide-react";
import { openWhatsApp, openWhatsAppWithCourse } from "../../utils/whatsapp";

export default function BookCallButton({ text = "Book A Call", className = "", courseLevel = null, openForm = false }) {
  const handleClick = () => {
    if (openForm) {
      window.dispatchEvent(new CustomEvent('openEnquiryForm'));
    } else if (courseLevel) {
      openWhatsAppWithCourse(undefined, courseLevel);
    } else {
      openWhatsApp();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-3 bg-white border-2 border-black rounded-full pl-0 pr-[83px] py-[13px] hover:bg-gray-50 transition-colors group relative ${className}`}
    >
      {/* Circle with arrow */}
      <div className="w-[60px] h-[60px] rounded-full border-2 border-black flex items-center justify-center ml-0 absolute left-0 top-1/2 -translate-y-1/2 bg-white">
        <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
      </div>
      {/* Text */}
      <span className="font-libre-franklin font-medium text-[18px] leading-[33px] text-black ml-[75px]">
        {text}
      </span>
    </button>
  );
}

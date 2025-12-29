import { useState } from "react";
import BookCallButton from "../Ui/BookCallButton";
import missionImg from "../../assets/dazzling_images/mission.png";

const tabsData = {
  vision: {
    title: "Our Vision",
    content: (
      <>
        To be{" "}
        <span className="font-bold">
          India's most trusted and innovative beauty academy
        </span>
        , recognized globally for producing world-class beauty professionals. We
        envision a future where every student leaves our academy equipped with
        international standards, cutting-edge skills, and the{" "}
        <span className="font-bold">
          confidence to excel in the global beauty industry
        </span>
        . Our goal is to empower aspiring professionals to achieve their dreams
        and become leaders in their field.
      </>
    ),
  },
  mission: {
    title: "Our Mission",
    content: (
      <>
        <span className="font-bold">Dazzling World</span> is committed to
        transforming passion into profession. We provide{" "}
        <span className="font-bold">
          comprehensive, internationally certified training in makeup artistry,
          hairstyling, skincare, and salon management
        </span>
        . Our mission is to nurture talent through hands-on practice, expert
        mentorship, and industry exposure, ensuring every student builds a{" "}
        <span className="font-bold">
          successful and fulfilling career in beauty and wellness
        </span>
        .
      </>
    ),
  },
  values: {
    title: "Core Values",
    content: (
      <>
        <span className="font-bold">Excellence, Integrity & Innovation</span>{" "}
        guide everything we do. We believe in{" "}
        <span className="font-bold">empowering women through education</span>,
        maintaining the highest standards of quality, and creating a supportive
        community. We're committed to{" "}
        <span className="font-bold">
          continuous learning, professional growth, and social responsibility
        </span>
        , ensuring our students become not just skilled professionals but
        confident, ethical leaders in the beauty industry.
      </>
    ),
  },
};

export default function Mission() {
  const [activeTab, setActiveTab] = useState("vision");
  const content = tabsData[activeTab];

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with shadow */}
        <div className="bg-white rounded-sm shadow-[0_4px_1.4px_0_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[576px_1fr]">
            {/* Left column - Tabs and Content */}
            <div className="px-6 md:px-10 lg:px-[37px] py-10 lg:py-12 flex flex-col justify-start">
              {/* Tab buttons */}
              <div className="flex flex-wrap gap-0 mb-7">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`font-poppins font-bold text-[16px] leading-none px-6 py-[18px] rounded-[7px] transition-all capitalize tracking-[0.64px] ${
                    activeTab === "vision"
                      ? "bg-black text-white"
                      : "bg-transparent text-black/78"
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`font-poppins font-bold text-[16px] leading-none px-6 py-[18px] rounded-[7px] transition-all capitalize tracking-[0.64px] ${
                    activeTab === "mission"
                      ? "bg-black text-white"
                      : "bg-transparent text-black/78"
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab("values")}
                  className={`font-poppins font-bold text-[16px] leading-none px-6 py-[18px] rounded-[7px] transition-all capitalize tracking-[0.64px] ${
                    activeTab === "values"
                      ? "bg-black text-white"
                      : "bg-transparent text-black/78"
                  }`}
                >
                  Core Values
                </button>
              </div>

              {/* Content area */}
              <div className="mb-12 max-w-[517px]">
                <p className="font-libre-franklin text-[18px] text-black leading-[33px] text-justify">
                  {content.content}
                </p>
              </div>

              {/* Book a Call Button */}
              <div className="mt-auto">
                <BookCallButton />
              </div>
            </div>

            {/* Right column - Image */}
            <div className="hidden lg:block h-full min-h-[534px] relative">
              <img
                src={missionImg}
                alt="Building illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile image - shown below on smaller screens */}
          <div className="lg:hidden w-full h-64 sm:h-80 md:h-96">
            <img
              src={missionImg}
              alt="Building illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

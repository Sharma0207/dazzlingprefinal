import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BookCallButton from "../Ui/BookCallButton";
import DoodlePattern from "./DoodlePattern";

const faqItems = [
  {
    id: "faq-1",
    question: "What qualifications do I need to enroll in beauty courses?",
    answer:
      "No prior experience is required! Our courses are designed for beginners through advanced professionals. A passion for beauty and willingness to learn is all you need to get started.",
  },
  {
    id: "faq-2",
    question: "Are the certificates internationally recognized?",
    answer:
      "Yes! Our courses are certified by international bodies including CIDESCO, VTCT, and HABIA. These qualifications are recognized globally and valued by top employers worldwide.",
  },
  {
    id: "faq-3",
    question: "How long are the courses and what's the time commitment?",
    answer:
      "Course durations vary from short-term programs (2-4 weeks) to comprehensive diplomas (3-6 months). We offer flexible scheduling including weekday, weekend, and online options to fit your lifestyle.",
  },
  {
    id: "faq-4",
    question: "Do you provide job placement assistance?",
    answer:
      "Absolutely! We have strong industry connections with top salons, spas, and beauty brands. Our placement team helps graduates secure positions or start their own beauty ventures.",
  },
  {
    id: "faq-5",
    question: "Can I pursue multiple courses or upgrade my skills?",
    answer:
      "Yes! Many students progress from foundation courses to advanced specializations. We offer lifelong learning support and regular upskilling workshops to keep you updated with latest trends.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-24">
      {/* Doodle Pattern Background */}
      <DoodlePattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-libre-franklin text-[#D09163] font-medium text-sm uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-playfair-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Your Questions <span className="text-[#D09163]">Answered</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12">
          {/* Left Column - Image with Overlay Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-96 sm:h-[500px] lg:h-full min-h-96 lg:min-h-[500px] bg-gray-200">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/430e272a3288f39222bb38a03dc4d3463ca19fa6?width=1428"
                alt="Nail technology classroom"
                className="w-full h-full object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg max-w-sm w-full">
                  <h3 className="font-playfair-display text-2xl md:text-3xl font-semibold text-black mb-3">
                    Still Have Questions?
                  </h3>
                  <p className="font-libre-franklin text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                    We're here to help—reach out to us for more information!
                  </p>
                  <BookCallButton text="Enquire Now" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="flex flex-col justify-start">
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`border-b border-gray-300 ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center justify-between py-5 md:py-6 px-0 hover:text-accent transition-colors text-left group"
                  >
                    <h3 className="font-roboto text-base md:text-xl font-normal text-gray-800 group-hover:text-accent transition-colors">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 md:w-7 md:h-7 text-gray-800 group-hover:text-accent transition-all flex-shrink-0 ${
                        expandedId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedId === item.id && (
                    <div className="pb-5 md:pb-6 px-0 animate-in fade-in duration-300">
                      <p className="font-roboto text-base text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

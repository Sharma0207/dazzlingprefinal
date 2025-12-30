import React, { useState, useRef, useEffect } from "react";
import { X, User, Mail, Phone, BookOpen, MessageSquare, Sparkles, Brush, Heart } from "lucide-react";
import { coursesData } from "../../data/coursesData";
import DoodlePattern from "./DoodlePattern";

interface FormData {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyeywy4rzA7GOwVYT60hVdrCGb8LbGGycRqYPpRPimxWFpgqr1Z0Nd-EzWNXShiFZ8Z/exec";

const EnquiryForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const zIndex = 999;
  const buttonPosition = { top: "96px", right: "24px" };

  // Listen for custom event from navbar button
  useEffect(() => {
    const handleOpenForm = () => {
      console.log("Enquiry form opened");
      setIsOpen(true);
    };

    const isMounted = { current: true };
    window.addEventListener("openEnquiryForm", handleOpenForm);

    return () => {
      isMounted.current = false;
      window.removeEventListener("openEnquiryForm", handleOpenForm);
    };
  }, []);

  const closeForm = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeForm();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // With no-cors mode, we can't read the response, so we'll assume success
      // if the request doesn't throw an error
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          courseInterest: "",
          message: "",
        });
        closeForm();
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Network error. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Group courses by level
  const groupedCourses = coursesData.reduce((acc, course) => {
    const level = course.level.charAt(0).toUpperCase() + course.level.slice(1);
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(course);
    return acc;
  }, {} as Record<string, typeof coursesData>);

  return (
    <div ref={containerRef} className="enquiry-form-root">
      <style jsx>{`
        .enquiry-overlay-${zIndex} {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
          z-index: ${zIndex};
          clip-path: circle(0px at ${buttonPosition.right} ${buttonPosition.top});
          transition: clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
          backdrop-filter: blur(5px);
        }

        .enquiry-overlay-${zIndex}.open {
          pointer-events: auto;
          clip-path: circle(150% at ${buttonPosition.right} ${buttonPosition.top});
        }

        .enquiry-panel-${zIndex} {
          position: relative;
          width: 90%;
          max-width: 600px;
          background: linear-gradient(135deg, #ffffff 0%, #fef9f5 100%);
          background-image: url('https://cdn.builder.io/api/v1/image/assets%2Fd555ff5d715946eea839700686a8452e%2F71a6822e50fa4bb9991d93104bfc58c3?format=webp&width=1000');
          background-size: cover;
          background-position: center;
          background-blend-mode: overlay;
          border-radius: 20px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: ${zIndex + 1};
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.3s ease 0.15s;
          overflow-x: hidden;
        }

        .enquiry-overlay-${zIndex}.open .enquiry-panel-${zIndex} {
          transform: scale(1);
          opacity: 1;
        }

        .enquiry-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #424242;
          z-index: ${zIndex + 3};
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .enquiry-close-btn:hover {
          transform: rotate(90deg);
          color: #D09163;
        }

        .form-field-wrapper {
          position: relative;
        }

        .form-field-icon {
          position: absolute;
          left: 12px;
          top: 40px;
          color: #D09163;
          pointer-events: none;
        }

        .form-input {
          padding-left: 40px !important;
        }

        .doodle-decoration {
          position: absolute;
          opacity: 0.05;
          pointer-events: none;
        }

        .doodle-top-left {
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
        }

        .doodle-bottom-right {
          bottom: -80px;
          right: -80px;
          width: 280px;
          height: 280px;
        }

        .header-icon {
          display: inline-block;
          margin-right: 10px;
          color: #D09163;
        }

        @media (max-width: 640px) {
          .enquiry-overlay-${zIndex} {
            clip-path: circle(0px at ${buttonPosition.right} ${buttonPosition.top});
          }

          .enquiry-overlay-${zIndex}.open {
            clip-path: circle(200% at ${buttonPosition.right} ${buttonPosition.top});
          }

          .enquiry-panel-${zIndex} {
            width: 95%;
            max-height: 95vh;
          }
        }
      `}</style>

      {/* Overlay with clip-path animation */}
      <div
        ref={overlayRef}
        className={`enquiry-overlay-${zIndex} ${isOpen ? "open" : ""}`}
        onClick={closeForm}
      >
        {/* Form Panel */}
        <div
          className={`enquiry-panel-${zIndex} relative overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Doodle Decorations */}
          <div className="doodle-decoration doodle-top-left opacity-10">
            <DoodlePattern />
          </div>
          <div className="doodle-decoration doodle-bottom-right opacity-10">
            <DoodlePattern />
          </div>

          <div className="p-8 md:p-12 relative z-10">
            {/* Close Button */}
            <button
              className="enquiry-close-btn"
              onClick={closeForm}
              aria-label="Close enquiry form"
            >
              <X size={28} />
            </button>

            {/* Success Message */}
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6 text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#D09163]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#424242] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your enquiry has been received. We'll get back to you soon!
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Form Header */}
                <div className="mb-8 mt-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#424242] mb-2 flex items-center gap-2">
                    <Brush className="w-8 h-8 text-[#D09163]" />
                    Say Hello
                  </h2>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#D09163]" />
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="form-field-wrapper">
                    <label className="block text-sm font-semibold text-[#424242] mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D09163]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field-wrapper">
                    <label className="block text-sm font-semibold text-[#424242] mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D09163]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-field-wrapper">
                    <label className="block text-sm font-semibold text-[#424242] mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D09163]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 000 0000 000"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                    />
                  </div>

                  {/* Course Interest */}
                  <div className="form-field-wrapper">
                    <label className="block text-sm font-semibold text-[#424242] mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#D09163]" />
                      Course of Interest
                    </label>
                    <select
                      name="courseInterest"
                      value={formData.courseInterest}
                      onChange={handleInputChange}
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                    >
                      <option value="">Select a course</option>
                      {Object.entries(groupedCourses).map(([level, courses]) => (
                        <optgroup key={level} label={level}>
                          {courses.map((course) => (
                            <option key={course.id} value={course.title}>
                              {course.title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-field-wrapper">
                    <label className="block text-sm font-semibold text-[#424242] mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#D09163]" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interests..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#D09163] to-[#E8B998] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Enquiry"}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information will be kept confidential.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;

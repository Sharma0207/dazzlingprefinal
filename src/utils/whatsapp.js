// WhatsApp utility function
export const openWhatsApp = (phoneNumber = "7324012345", message = "Hi, I'd like to book a call with your experts. I'm interested in learning more about your courses and admission options.") => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};

// Admission types for course selection
export const ADMISSION_TYPES = {
  BEGINNER: "Beginner Level (Foundation courses)",
  BASIC: "Basic Level (Intermediate courses)",
  ADVANCE: "Advanced Level (Professional courses)",
  NOT_SURE: "Not sure yet",
};

// WhatsApp function with course interest
export const openWhatsAppWithCourse = (phoneNumber = "7324012345", courseLevel) => {
  const courseInfo = courseLevel ? ` I'm interested in ${ADMISSION_TYPES[courseLevel] || courseLevel}.` : "";
  const message = `Hi, I'd like to book a call with your experts. I'm interested in learning more about your courses and admission options.${courseInfo}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};

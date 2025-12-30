// WhatsApp utility function
export const openWhatsApp = (phoneNumber = "7324012345", message = "Hi, I'd like to book a call with your experts.") => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};

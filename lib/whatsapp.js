// WhatsApp number all enquiries open in (digits only, international format).
export const WHATSAPP_NUMBER = "2349037555786";

// Builds a wa.me link with the message pre-filled.
export function whatsappUrl(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Default message behind the "Book a viewing" buttons.
export const VIEWING_MESSAGE =
  "Hello CITYMORE HOMES, I'd like to book a viewing.";

// Default message behind the general "Chat on WhatsApp" contact links.
export const ENQUIRY_MESSAGE =
  "Hello CITYMORE HOMES, I'd like to make an enquiry.";

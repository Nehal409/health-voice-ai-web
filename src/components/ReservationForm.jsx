/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
// import { logEvent } from "firebase/analytics";
// import { analytics } from "../../firebaseConfig";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ReservationForm = ({ isVoiceOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isVoiceOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVoiceOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseUrl}/voice-agent/calls/hospital`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
        }),
      });

      if (response.ok) {
        // logEvent(analytics,"Reservation_Request")
        toast.success(
          "Appointment request sent successfully. The AI voice agent will contact you soon!"
        );
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send appointment request: ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`Error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setPhone("");
      e.target.reset();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  return (
    <div>
    {isVoiceOpen && (
      <div
        id="overlay"
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        onClick={handleOverlayClick}
      >
        <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-300 shadow-xl rounded-xl p-8 max-w-md w-full h-[55vh] relative overflow-hidden transform transition-all duration-300 hover:scale-105">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <AiOutlineClose size={14} />
          </button>
  
          <h5 className="text-2xl font-extrabold mb-6 text-center">
            Book An Appointment
          </h5>
  
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-left font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-left font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
  
            <div className="text-center">
                <button
                  type="submit"
                  className="btn-solid-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Voice AI Demo Call"}
                </button>
              </div>
          </form>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default ReservationForm;

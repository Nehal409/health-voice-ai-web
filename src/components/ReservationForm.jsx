/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon from react-icons

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ReservationForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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
        setMessage(
          "Appointment request sent successfully. The AI voice agent will contact you soon!"
        );
      } else {
        const errorData = await response.json();
        setMessage(`Failed to send appointment request: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setPhone("");
      setName("");
      e.target.reset();
    }
  };

  // Function to handle clicks on the overlay to close the modal
  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          id="overlay" // Overlay id for click detection
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-12"
          onClick={handleOverlayClick} // Add click event handler
        >
          <div className="bg-blue-50 border border-gray-200 shadow-md rounded-lg p-8 max-w-md w-full h-[440px] relative overflow-hidden">
            {/* Close Icon */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <AiOutlineClose size={24} />
            </button>

            <h5 className="text-2xl font-bold mb-4 text-center">
              Book Your Appointment
            </h5>

            {message && (
              <p className="mb-4 text-center text-green-500">{message}</p>
            )}

            <form id="contactForm" onSubmit={handleSubmit}>
              {/* <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-left mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div> */}

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  className="block text-gray-700 text-left mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
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

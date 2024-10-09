import { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai"; // Import close icon from react-icons

// eslint-disable-next-line react/prop-types
const CalendlyModal = ({ isOpen, onClose }) => {
  // Function to handle clicks on the overlay to close the modal
  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  useEffect(() => {
    // Lock the background scroll when the modal is open
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Clean up on component unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div
          id="overlay" // Overlay id for click detection
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-12"
          onClick={handleOverlayClick} // Add click event handler
        >
          <div className="bg-blue-50 border border-gray-200 shadow-md rounded-lg p-8 max-w-md w-full h-[63vh] relative overflow-hidden">
            {/* Close Icon */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
            >
              <AiOutlineClose size={14} />
            </button>

            <div className="iframe-container">
              <iframe
                width="100%"
                height="400px"
                src="https://calendly.com/haroon-ehsaantech"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyModal;

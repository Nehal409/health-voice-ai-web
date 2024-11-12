import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const CalendlyModal = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-14"
          onClick={handleOverlayClick}
        >
          <div className="bg-blue-50 border border-gray-200 shadow-md rounded-lg p-8 w-[800px] h-[600px] relative overflow-hidden transform transition-all duration-300 hover:scale-105">
            {/* Close Icon */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
            >
              <AiOutlineClose size={14} />
            </button>

            {/* Child div with no overflow and iframe fully fitted */}
            <div className="w-full h-full overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://calendly.com/haroon-ehsaantech"
                title="Calendly"
                style={{ border: "none" }} // Removes default iframe border
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyModal;

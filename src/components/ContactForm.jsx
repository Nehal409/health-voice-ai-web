import { useState } from "react";
import toast from "react-hot-toast";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [lawFirmName, setLawFirmName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          lawFirmName: lawFirmName,
          description: description,
          
        }),
      });

      if (response.ok) {
        toast.success(
          "Thank you for contacting us! Your message has been successfully sent, and our team will get back to you shortly."
        );
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.message}`);
      }
    } catch (error) {
      toast.error(`Error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setName("");
      setDescription("");
      setLawFirmName(""); 
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="py-8 text-center">
      <div className="container mx-auto px-4 sm:px-8 xl:px-4">
        <div className="card mx-auto max-w-lg p-8 bg-blue-50 border border-gray-200 shadow-md rounded-lg">
          <div className="card-body">
            <h5 className="text-2xl font-bold mb-4 text-center">Contact Us</h5>
            
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-left mb-2"
                >
                  Name
                </label>
                <input
                  type="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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
                  htmlFor="text"
                  className="block text-gray-700 text-left mb-2"
                >
                  Hospital Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="lawfirmName"
                  placeholder="Enter your hospital name"
                  value={lawFirmName}
                  onChange={(e) => setLawFirmName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
              <label
                  htmlFor="text"
                  className="block text-gray-700 text-left mb-2"
                >
                  Description
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 h-32 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="description"
                  placeholder="Brief description of interest..."
                  value={description} // Ensure this state variable is set correctly
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-solid-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

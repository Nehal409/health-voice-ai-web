// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReservationForm from "./ReservationForm"; 
import Streamlit2 from "../assets/images/Streamlit2.mp4";
import CalendlyModal from "./CalendlyModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isVoiceOpen, setIsVoiceOpen] = useState(false); 

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openVoiceModal = () => setIsVoiceOpen(true);
  const closeVoiceModal = () => setIsVoiceOpen(false);

  return (
    <header className="header py-12 mt-[20px] text-center md:pt-20 lg:text-center xl:pt-28 xl:pb-8">
    <div className="sm:px-8 lg:grid lg:gap-x-8">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-2">
            Boost efficiency by automating appointments and patient calls
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-2">
          – let AI handle the repetitive tasks so you can focus on patient care
          </h2>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:mx-12 mt-2">
      <div className="flex flex-col justify-center text-center sm:text-center md:text-center lg:text-left xl:mr-12">
        <ul className="lg:list-disc">
          <li>
            <h1 className="font-medium text-xl mb-4">
                Automate appointment scheduling & follow ups- Reduce
                administrative load by up to 35%
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-4">
                Enhance Customer service - Boost customer&apos;s engagement by
                up to 25% through our chatbot.
              </h1>
            </li>
            <li>
              <h1 className="font-medium text-xl mb-4">
                Seamless AI integration for your business
              </h1>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center mb-6 lg:mb-0">
        <div id="reservation" className="w-full">
          <div className="relative pb-[40.25%] mx-10 mt-6 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={Streamlit2}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Embedded Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 lg:gap-x-12 md:gap-x-8 sm:gap-x-6 gap-x-4 mt-10 items-center justify-center">
  <div className="lg:text-right sm:text-center text-center md:text-right">
    <button className="btn-solid-lg" onClick={openModal}>
      Book a Discovery Call
    </button>
  </div>

  <div className="lg:text-left sm:text-center md:text-left  text-center">
    <button className="btn-solid-sm" onClick={openVoiceModal}>
      Voice AI scheduling Demo
    </button>
  </div>
</div>

    <CalendlyModal isOpen={isOpen} onClose={closeModal} />
  
    {isVoiceOpen && (
      <ReservationForm isVoiceOpen={isVoiceOpen} onClose={closeVoiceModal} />
    )}
  </header>
  );
};

export default Header;

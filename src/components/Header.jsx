// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
import CalendlyModal from "./CalendlyModal";
import VideoWithoutTransition from "../assets/images/VideoWithoutTransition.mp4"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openVoiceModal = () => setIsVoiceOpen(true);
  const closeVoiceModal = () => setIsVoiceOpen(false);

  return (
    <header className="header py-12 mt-6 text-center md:pt-20 lg:text-center xl:pt-28 xl:pb-8 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="sm:px-8 lg:grid lg:gap-x-8">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight text-gray-800 drop-shadow-md">
            Empower Healthcare with AI-Driven Automation
          </h1>
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 text-gray-600">
            Let AI handle appointment scheduling, follow-ups, and patient
            calls, so you can focus on exceptional patient care.
          </h2>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:mx-12 mt-6">
        <div className="flex flex-col justify-center text-center lg:text-left xl:mr-12">
          <ul className="lg:list-disc marker:text-black space-y-6">
            <li>
              <h3 className="font-medium text-xl text-gray-700">
                <span className="font-semibold text-gray-900">
                  Smart Appointment Management:
                </span>{" "}
                Handle scheduling, rescheduling, and follow-ups to cut
                administrative workload by up to 35%.
              </h3>
            </li>
            <li>
              <h3 className="font-medium text-xl text-gray-700">
                <span className="font-semibold text-gray-900">
                  Enhanced Patient Experience:
                </span>{" "}
                Boost engagement by up to 25% with our conversational AI bots.
              </h3>
            </li>
            <li>
              <h3 className="font-medium text-xl text-gray-700">
                <span className="font-semibold text-gray-900">
                  Effortless Integration:
                </span>{" "}
                Easily incorporate AI into your existing systems for a seamless
                transition.
              </h3>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <div id="reservation" className="w-full">
            <div className="relative pb-[40.25%] mx-10 mt-6 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={VideoWithoutTransition}
                frameBorder="0"
                allow="autoplay"
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
      <div>
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
      </div>
      {isVoiceOpen && (
        <ReservationForm isVoiceOpen={isVoiceOpen} onClose={closeVoiceModal} />
      )}
    </header>
  );
};

export default Header;

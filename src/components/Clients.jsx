import MarzLogo from "../assets/images/MarzLogo.png";
import AveticsLogo from "../assets/images/AveticsLogo.png";
import LucsonLogo2 from "../assets/images/LucsonLogo2.png";
import ELSS from "../assets/images/ELSS.png";

const Clients = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 bg-gray-200 relative">
      <div className="triangle-above-heading absolute left-1/2 transform -translate-x-1/2 -top-4"></div>
      <div className="flex flex-col justify-center text-center lg:text-center xl:mr-12">
        <h1 className="text-3xl mt-6 font-bold">TRUSTED BY</h1>

        {/* Client Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 my-8 justify-center mx-auto">
          <div className="flex justify-center items-center w-full h-40 bg-white">
            <img
              src={ELSS}
              alt="Image 1"
              className="max-w-full max-h-full mt-2 mb-1"
            />
          </div>
          <div className="flex justify-center items-center w-full h-40 bg-white">
            <img
              src={AveticsLogo}
              alt="Image 2"
              className="max-w-full max-h-full"
            />
          </div>
          <div className="flex justify-center items-center w-full h-40 bg-white">
            <img
              src={MarzLogo}
              alt="Image 2"
              className="max-w-full max-h-full"
            />
          </div>
          <div className="flex items-center justify-between w-full h-40 bg-white">
            <div>
              <img
                src={LucsonLogo2}
                alt="Image 3"
                className="max-w-full max-h-full"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-red-600 mr-4">Lucson</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

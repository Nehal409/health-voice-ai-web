import LucsonLogo from "../assets/images/LucsonLogo.svg";
import MarzLogo from "../assets/images/MarzLogo.png";
import AveticsLogo from "../assets/images/AveticsLogo.png";
const Clients = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 bg-gray-100">
      <div className="flex flex-col justify-center text-center lg:text-center xl:mr-12">
        <h1 className="text-4xl my-12 mb-5 font-bold">TRUSTED BY</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="flex justify-center items-center w-full h-64 bg-white">
            <img
              src={MarzLogo}
              alt="Image 1"
              className="max-w-full max-h-full"
            />
          </div>

          <div className="flex justify-center items-center w-full h-64 bg-white">
            <img
              src={AveticsLogo}
              alt="Image 2"
              className="max-w-full max-h-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between items-center w-full h-64 bg-white">
            <div>
              <img
                src={LucsonLogo}
                alt="Image 3"
                className="max-w-full max-h-full"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-red-600">Lucson</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    image: "https://ehsaantech.com/wp-content/uploads/2023/03/Untitled-design.png",
    text: "Ehsaan Technologies is extremely reliable and competent! They were able to find bugs that many others could not, and they really knows their domain. They executed everything successfully, and even suggested things to improve the system we already had. I hope to work with them again in the future on even larger projects, as I believe he is a great fit for handling complex AWS projects. I highly recommend him!",
    author: "Alex Craig",
    company:"Co-Founder - MARZ & TriplePlay"
  },
  {
    image: "https://ehsaantech.com/wp-content/uploads/2022/12/weilang-zhang.jpeg",
    text: "As a client of Ehsaan Technologies, I had the pleasure of working with their team and utilizing their services for Avetics’ drone-based inspection service. Ehsaan Technologies’ expertise in utilizing computer vision technology was remarkable. I must say that I am thoroughly impressed with the results and the level of service provided by Ehsaan Technologies.",
    author: "Weiliang Zhang ",
    company:" CEO - Avetics Global"

  }
  
];

const Testimonial = () => {
    return (
      <div className="py-32">
        <div className="container px-4 sm:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold lg:max-w-5xl lg:mx-auto">
            What our Clients are saying
          </h2>
  
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className=""
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card flex flex-col items-center justify-center px-14">
                  <img
                    className="card-image w-24 h-24 rounded-full object-cover mb-4"
                    src={testimonial.image}
                    alt={`Testimonial ${index + 1}`}
                  />
                  <div className="text-center w-lg">
                    <p className="italic mb-3 text-gray-700">{testimonial.text}</p>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-700">{testimonial.company}</p>
                  </div>
                </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

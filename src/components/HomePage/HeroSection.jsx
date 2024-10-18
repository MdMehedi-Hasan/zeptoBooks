import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = ({ data, isLoading }) => {
  console.log(data);
  return (
    <section className="bg-orange-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Explore the World of Books, <br /> Your Next Great Read Awaits.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Dive into our curated selection of bestsellers, classics, and new
            releases. From fiction to self-help, we have books for every taste.
            Enjoy easy browsing and exclusive discounts on your favorite titles.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">
            Get Started
          </button>
        </div>

        {isLoading ? (
          <div>
            <div className="animate-pulse bg-gray-200 rounded-lg h-80 w-64 mx-auto mb-8 shadow-lg"></div>
            <ul className="flex items-center justify-center gap-2">
              <li className="w-2 h-2 rounded-full bg-gray-200 animate-pulse mt-1"></li>
              <li className="w-2 h-2 rounded-full bg-gray-200 animate-pulse mt-1"></li>
              <li className="w-2 h-2 rounded-full bg-gray-200 animate-pulse mt-1"></li>
            </ul>
          </div>
        ) : (
          <div className="w-4/12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {/* Replace with your images */}
              {data?.map((item) => (
                <SwiperSlide key={data?.id}>
                  <img
                    src={item?.formats?.["image/jpeg"]}
                    alt="Slide 1"
                    className="rounded-lg shadow-lg mx-auto mb-8"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

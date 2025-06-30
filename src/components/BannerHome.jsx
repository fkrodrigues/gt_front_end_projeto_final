import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Button } from "primereact/button";

const BannerHome = ({ imageSlide }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dotsClass: "swiper-dots",
          dotsActiveClass: "swiper-dots-active",
        }}
        navigation
        className="w-full h-[680px]
        max-sm:w-[375px]
        max-sm:h-[178px]
        
        ">
        {imageSlide.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={`Slide ${image.id}`}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="
        overflow-hidden flex
        rounded-3xl
        absolute 
        top-[9rem] ml-[100px]
        z-2
        bg-[#f5f5f5b7]
        shadow-2xl
        backdrop-blur-sm
        w-[560px] h-[400px]
        p-5
        max-sm:w-[23.4rem]
        max-sm:ml-0
        max-sm:p-0
        max-sm:static
        max-sm:shadow-none
        max-sm:rounded-none

      ">
        <div
          className=" 
          w-[510px]
          h-[500px]
          flex flex-col
          rounded-lg
          ml-4
          max-sm:ml-0
          max-sm:items-center

        ">
          <p
            className="
          tracking-wide
          text-[1rem] text-[#F6AA1C]
          font-bold
          mt-3
          max-sm:text-[#c92071]
        ">
            Melhores ofertas personalizadas
          </p>
          <h2
            className="
          text-[4rem] font-bold leading-none
          mb-6 mt-5 w-[515px]
          max-sm:text-[2rem]
          max-sm:text-center
          max-sm:w-[300px]
        " >
            Queima de estoque Nike 🔥
          </h2>
          <p
            className="
          text-[17px] text-[#474747]
          tracking-widest leading-7 mb-9
          max-sm:w-[300px]
          max-sm:text-center
        ">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>

          <Button
            label="Ver Ofertas"
            className="
            bg-[#c92071] text-white
            p-2.5 rounded-[8px]
            w-[210px] text-[.9rem]
            tracking-[1px]
            hover:bg-[#db2777]

            "/>
        </div>
      </div>
    </>
  );
};

export default BannerHome;

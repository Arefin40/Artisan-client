import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default () => {
   return (
      <div className="mt-4 lg:mt-8 relative w-full overflow-hidden">
         <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay
            className="w-full h-full rounded-md max-h-[34rem]"
         >
            <SwiperSlide className="flex flex-col gap-y-6">
               <img
                  src="https://i.ibb.co/7yRH5KW/10366.jpg"
                  className="h-full lg:h-auto rounded-md object-cover object-bottom"
               />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col gap-y-6">
               <img
                  src="https://i.ibb.co/VLbBM0q/2151120294.jpg"
                  className="h-full lg:h-auto rounded-md object-cover object-bottom"
               />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col gap-y-6">
               <img
                  src="https://i.ibb.co/3m6bM5R/2-landscape-oil-painting-enxu-zhou.jpg"
                  className="h-full lg:h-auto rounded-md object-cover object-bottom"
               />
            </SwiperSlide>
         </Swiper>

         <div className="absolute inset-0 bg-black/20 text-3xl lg:text-6xl text-white font-extrabold text-center flex items-center justify-center z-10">
            <p className="max-w-screen-md mx-auto leading-normal">
               A Gallery Showcasing Artisan Creativity
            </p>
         </div>
      </div>
   );
};

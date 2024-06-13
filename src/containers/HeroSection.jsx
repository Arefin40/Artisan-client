import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default () => {
   return (
      <div className="mt-4 lg:mt-8 relative w-full overflow-hidden aspect-[1280/480] clip-panorama">
         <Swiper
            modules={[Autoplay, Pagination]}
            // pagination={{ clickable: true }}
            autoplay
            className="w-full h-full"
         >
            <SwiperSlide className="flex flex-col gap-y-6">
               <img
                  src="https://i.ibb.co/5LJT5kN/9828885663853.jpg"
                  className="h-full lg:h-auto object-cover"
               />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col gap-y-6">
               <img
                  src="https://i.ibb.co/VLbBM0q/2151120294.jpg"
                  className="h-full lg:h-auto object-cover"
               />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col gap-y-6">
               <img
                  src="https://i.ibb.co/b536LqD/93571903475.jpg"
                  className="h-full lg:h-auto object-cover"
               />
            </SwiperSlide>
         </Swiper>

         <svg
            width="0"
            height="0"
            className="absolute z-10 border dark:border-neutral-700 border-red-600"
         >
            <defs>
               <clipPath id="panorama" clipPathUnits="objectBoundingBox">
                  <path
                     className="hidden lg:block"
                     d="M0,0 v1 s0.08,-0.027,0.188,-0.053 V0.053 C0.08,0.027,0,0,0,0 m1,0 s-0.08,0.027,-0.188,0.053 v0.894 C0.92,0.973,1,1,1,1 v-1 M0.202,0.056 v0.888 c0.089,-0.02,0.194,-0.039,0.291,-0.04 V0.096 c-0.097,-0.001,-0.202,-0.019,-0.291,-0.04 m0.596,0 c-0.089,0.02,-0.194,0.039,-0.291,0.04 v0.809 c0.097,0.001,0.202,0.019,0.291,0.04 V0.056"
                  />
                  <path
                     className="lg:hidden"
                     d="M0,0 v1 s0.314,-0.081,0.493,-0.083 V0.083 C0.314,0.081,0,0,0,0 m1,0 S0.686,0.081,0.507,0.083 v0.834 c0.179,0.002,0.493,0.083,0.493,0.083 V0"
                  />
               </clipPath>
            </defs>
         </svg>
      </div>
   );
};

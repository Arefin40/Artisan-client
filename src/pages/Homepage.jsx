import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeroSection from "@containers/HeroSection";
import SectionHeading from "@containers/SectionHeading";
import FiveStar from "@containers/FiveStar";

export default () => {
   const { categories } = useLoaderData();

   return (
      <>
         <HeroSection />

         <section>
            <SectionHeading heading="Categories">
               Discover a world brimming with artistic expression, from
               intricate designs to innovative projects, awaiting your unique
               touch.
            </SectionHeading>

            <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
               {categories.map((category) => (
                  <div key={category._id} className="grid gap-y-6 text-center">
                     <div className="rounded-[16rem_16rem_1rem_1rem] h-96 border overflow-hidden">
                        <img
                           src={category.image}
                           className="object-cover w-full h-full"
                        />
                     </div>
                     <div className="grid gap-y-5">
                        <h3 className="font-semibold text-primary-600 font-display text-3xl sm:text-3xl">
                           {category.name}
                        </h3>
                        <p className="sm:text-lg font-light text-ellipsis truncate line-clamp-3">
                           {category.description}
                        </p>
                     </div>
                  </div>
               ))}
            </main>
         </section>

         <section className="overflow-hidden">
            <SectionHeading heading="Testimonials">
               Brushing strokes of Satisfaction! Hear What Our Patrons Praise
               about Our Masterpieces in Pixels.
            </SectionHeading>

            <Swiper
               modules={[Autoplay]}
               autoplay
               className="max-w-screen-md text-center sm:text-lg leading-relaxed"
            >
               <SwiperSlide className="grid gap-y-6 justify-items-center content-start">
                  <p>
                     Stunning mastery of color and form! Your painting
                     effortlessly captures the subtle interplay of light and
                     shadow, drawing the viewer into a mesmerizing world of
                     depth and emotion. Each brushstroke seems to dance on the
                     canvas, inviting contemplation and admiration. A true
                     masterpiece!
                  </p>
                  <div class="relative flex items-center gap-x-4 text-left">
                     <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                        class="h-10 w-10 rounded-full bg-gray-50"
                     />
                     <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900">
                           <span>
                              <span class="absolute inset-0"></span>Lindsay
                              Walton
                           </span>
                        </p>
                        <FiveStar />
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className="grid gap-y-6 justify-items-center content-start">
                  <p>
                     The painting and drawings evoke a sense of wonder and
                     intrigue that lingers long after the first glance. The
                     composition is thoughtful, leading the eye on a journey of
                     discovery through intricate layers of meaning. The use of
                     color and texture adds richness and complexity, inviting
                     viewers to immerse themselves in the beauty of the artist's
                     artistry. Truly remarkable!
                  </p>
                  <div class="relative flex items-center gap-x-4 text-left">
                     <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="h-10 w-10 rounded-full bg-gray-50"
                     />
                     <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900">
                           <span>
                              <span class="absolute inset-0"></span>Jesse
                              Vilinsky
                           </span>
                        </p>
                        <FiveStar />
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className="grid gap-y-6 justify-items-center content-start">
                  <p>
                     The drawings possess a rare elegance and precision that
                     command attention. The attention to detail is exquisite,
                     rendering every line with purpose and grace. There's a
                     delicate balance between realism and interpretation that
                     lends your work a timeless quality. Bravo on creating such
                     captivating pieces!
                  </p>
                  <div class="relative flex items-center gap-x-4 text-left">
                     <img
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        class="h-10 w-10 rounded-full bg-gray-50"
                     />
                     <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900">
                           <span>
                              <span class="absolute inset-0"></span>Al Woodworth
                           </span>
                        </p>
                        <FiveStar />
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </section>
      </>
   );
};

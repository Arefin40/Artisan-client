import { useLoaderData, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeroSection from "@containers/HeroSection";
import SectionHeading from "@containers/SectionHeading";
import StarRating from "@containers/StarRating";
import NewsLetter from "@containers/NewsLetter";
import PaintingCrad from "@containers/PaintingCrad";

export default () => {
   const { categories, paintings } = useLoaderData();

   return (
      <>
         <section className="mt-8 relative extend-beyond-parent">
            <h1 className="mx-auto px-5 lg:px-0 -mb-4 lg:-mb-8 max-w-md md:max-w-screen-md text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 z-20 md:leading-snug lg:leading-snug">
               A Gallery Showcasing Artisan Creativity
            </h1>

            <HeroSection />
         </section>

         <section>
            <SectionHeading heading="Categories">
               Discover a world brimming with artistic expression, from
               intricate designs to innovative projects, awaiting your unique
               touch.
            </SectionHeading>

            <main className="flex flex-wrap gap-x-16 gap-y-10 justify-center">
               {categories.map((category) => (
                  <Link key={category._id} to={`/paintings/${category.slug}`}>
                     <div className="grid gap-y-6 text-center justify-items-center w-64">
                        <div className="rounded-full border overflow-hidden aspect-square">
                           <img
                              src={category.image}
                              className="object-cover w-full h-full"
                           />
                        </div>
                        <div className="grid gap-y-5">
                           <h3 className="font-semibold text-gray-800 text-xl">
                              {category.name}
                           </h3>
                        </div>
                     </div>
                  </Link>
               ))}
            </main>
         </section>

         <section>
            <SectionHeading heading="Paintings & Drawings">
               Explore a spectrum of masterpieces, from captivating paintings to
               intricate drawings, all curated to inspire your inner artist.
            </SectionHeading>

            <main className="grid gap-8 content-start lg:grid-cols-3">
               <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 content-start">
                  <PaintingCrad
                     className="min-h-56 lg:aspect-square"
                     data={paintings[1]}
                  />
                  <PaintingCrad className="h-56" data={paintings[3]} />
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 content-start">
                  <PaintingCrad
                     className="min-h-56 lg:h-96"
                     data={paintings[0]}
                  />
                  <PaintingCrad
                     className="min-h-56 xl:min-h-96"
                     data={paintings[4]}
                  />
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 content-start">
                  <PaintingCrad
                     className="min-h-56 lg:aspect-square"
                     data={paintings[2]}
                  />
                  <PaintingCrad className="h-56" data={paintings[5]} />
               </div>
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
               className="max-w-screen-md text-center text-gray-800 leading-relaxed"
            >
               <SwiperSlide className="grid gap-y-6 justify-items-center content-start">
                  <p>
                     I recently purchased a breathtaking sunset mountain
                     landscape painting from this store. The painting arrived
                     promptly, well-packaged, and in pristine condition. The
                     colors are vibrant, and the attention to detail is
                     remarkable. It adds such warmth and tranquility to my
                     living room. I highly recommend this store to anyone
                     looking for high-quality artwork.
                  </p>
                  <div className="relative flex items-center gap-x-4 text-left">
                     <img
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        className="h-10 w-10 rounded-full bg-gray-50"
                     />
                     <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                           <span>
                              <span className="absolute inset-0"></span>Lindsay
                              Walton
                           </span>
                        </p>
                        <StarRating rating="5" />
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className="grid gap-y-6 justify-items-center content-start">
                  <p>
                     I bought a as a gift for my wife, and it exceeded all
                     expectations. The use of oil paints creates such a rich and
                     the details are impeccable. My wife was thrilled with her
                     gift, and it now hangs proudly in our home. Thank you for
                     the exceptional service and beautiful artwork!
                  </p>
                  <div className="relative flex items-center gap-x-4 text-left">
                     <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-10 w-10 rounded-full bg-gray-50"
                     />
                     <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                           <span>
                              <span className="absolute inset-0"></span>Jesse
                              Vilinsky
                           </span>
                        </p>
                        <StarRating rating="5" />
                     </div>
                  </div>
               </SwiperSlide>

               <SwiperSlide className="grid gap-y-6 justify-items-center content-start">
                  <p>
                     Charcoal Desert is a stunning piece of art. The contrast
                     and depth created with charcoal are impressive. It truly
                     transports you to the vastness of the desert. I only wish
                     it was still in stock so I could recommend it to others!
                  </p>
                  <div className="relative flex items-center gap-x-4 text-left">
                     <img
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-10 w-10 rounded-full bg-gray-50"
                     />
                     <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                           <span>
                              <span className="absolute inset-0"></span>Al
                              Woodworth
                           </span>
                        </p>
                        <StarRating rating="5" />
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </section>

         <NewsLetter />
      </>
   );
};

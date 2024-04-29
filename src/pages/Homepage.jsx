import { useLoaderData } from "react-router-dom";
import HeroSection from "@containers/HeroSection";

export default () => {
   const { categories } = useLoaderData();

   return (
      <>
         <HeroSection />

         <section>
            <div class="py-6 lg:py-8 mb-6 lg:mb-12 grid justify-items-center gap-y-4 lg:gap-y-6 text-center border-t border-b border-dashed">
               <h1 class="font-bold text-xl lg:text-4xl text-gray-800">
                  Categories
               </h1>
               <h4 class="max-w-lg ">
                  Discover a world brimming with artistic expression, from
                  intricate designs to innovative projects, awaiting your unique
                  touch.
               </h4>
            </div>

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
      </>
   );
};

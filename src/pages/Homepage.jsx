import { useLoaderData } from "react-router-dom";

export default () => {
   const { categories } = useLoaderData();
   console.log(categories);

   return (
      <>
         <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
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
         </section>
      </>
   );
};

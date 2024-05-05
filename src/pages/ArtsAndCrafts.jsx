import Button from "@components/Button";
import StarRating from "@containers/StarRating";
import { useLoaderData } from "react-router-dom";

export default () => {
   const paintings = useLoaderData();

   return (
      <section className="mt-4 lg:mt-8 grid gap-y-6 lg:gap-y-12">
         <header className="px-8 py-14 bg-primary-50 text-3xl lg:text-5xl font-extrabold text-primary-500 text-center rounded-lg">
            Arts & Crafts Collection
         </header>

         <main className="grid gap-y-5 text-gray-800">
            <div className="hidden py-4 md:grid grid-cols-[8rem_1fr_repeat(3,5rem)] lg:grid-cols-[10rem_1fr_repeat(3,8rem)] xl:lg:grid-cols-[10rem_1fr_repeat(3,12rem)] gap-x-6 lg:gap-x-12 font-semibold bg-gray-50 rounded">
               <p className="text-center">Image</p>
               <p>Artwork</p>
               <p>Price</p>
               <p>Rating</p>
               <p className="text-center">Action</p>
            </div>

            <div className="grid gap-y-8">
               {paintings.map(
                  ({ _id, photoUrl, itemName, price, username, rating }) => (
                     <div
                        key={_id}
                        className="table-view grid gap-x-6 lg:gap-x-12 gap-y-4 items-center"
                     >
                        <div className="artwork sm:hidden border-4 border-black md:flex items-center justify-center overflow-hidden">
                           <div className="p-3 w-full h-full">
                              <img
                                 src={photoUrl}
                                 alt={itemName}
                                 className="object-cover object-center aspect-square sm:aspect-video"
                              />
                           </div>
                        </div>

                        <div className="info sm:space-y-1.5">
                           <p className="font-semibold text-lg">{itemName}</p>
                           <p className="text-sm">
                              <span className="text-gray-500">by:</span>{" "}
                              <span>{username}</span>
                           </p>
                        </div>

                        <p className="price text-lg font-semibold">${price}</p>

                        <StarRating rating={rating} className="rating" />

                        <Button
                           to={`/painting/${_id}`}
                           className="view-btn text-center col-span-2 sm:col-span-1"
                        >
                           View
                           <span className="ml-1 hidden lg:inline-block">
                              Details
                           </span>
                        </Button>
                     </div>
                  )
               )}
            </div>
         </main>
      </section>
   );
};

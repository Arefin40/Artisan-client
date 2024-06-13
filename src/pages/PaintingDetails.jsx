import Button from "@components/Button";
import LoadingState from "@components/LoadingState";
import StarRating from "@containers/StarRating";
import { useFetch } from "@hooks";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default () => {
   const { id } = useParams();
   const { data: painting, isLoading } = useFetch(`/paintings/${id}`);

   if (isLoading) return <LoadingState />;

   return (
      <section className="mt-4 lg:mt-8 grid lg:grid-cols-2 gap-x-16 gap-y-8">
         <div className="flex items-center justify-center border-[0.65rem] sm:border-[0.875rem] lg:border-[1rem] border-black aspect-[1/1.05] md:aspect-[16/10] lg:aspect-[1/1.05] bg-white shadow-md lg:shadow-lg shadow-black">
            <div className="bg-white w-full h-full shadow-inner shadow-black">
               <img
                  src={painting.photoUrl}
                  className="p-6 sm:p-12 lg:p-16 w-full h-full object-cover object-center"
               />
            </div>
         </div>

         <div className="p-5 sm:p-8 xl:p-12 border dark:border-neutral-700 rounded-xl text-sm sm:text-base">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-neutral-100">
               {painting.itemName}
            </h1>

            <div className="my-2.5 sm:my-4 sm:text-lg flex items-center space-x-5 divide-x text-base">
               <Link to={`/paintings/${painting.subcategory}`} className="text-primary-600">
                  {painting.subcategory.charAt(0).toUpperCase() + painting.subcategory.slice(1)}
               </Link>

               <div className="pl-5 flex items-center gap-x-3">
                  <StarRating rating={painting.rating} />
               </div>
            </div>

            <p className="leading-relaxed">{painting.description}</p>

            <div className="mt-5 flex gap-x-2">
               <h1>Artist:</h1>
               <p className="text-gray-800 dark:text-neutral-100 font-medium">
                  {painting.username}
               </p>
            </div>

            <h1 className="my-5 sm:my-10 text-primary-500 font-bold text-2xl sm:text-3xl">
               ${painting.price}
            </h1>

            <div className="grid gap-y-2">
               <div className="grid grid-cols-[7.5rem_1fr] items-center gap-x-4">
                  <h3>Customizable </h3>
                  <p className="text-gray-800 dark:text-neutral-100 font-medium">
                     <span className="mr-2 font-normal text-gray-400">:</span>
                     {painting.customizable ? "Yes" : "No"}
                  </p>
               </div>
               <div className="grid grid-cols-[7.5rem_1fr] items-center gap-x-4">
                  <h3>Processing time </h3>
                  <p className="text-gray-800 dark:text-neutral-100 font-medium">
                     <span className="mr-2 font-normal text-gray-400">:</span>
                     {painting.processingTime}
                  </p>
               </div>
               <div className="grid grid-cols-[7.5rem_1fr] items-center gap-x-4">
                  <h3>Stock status </h3>
                  <p className="text-gray-800 dark:text-neutral-100 font-medium">
                     <span className="mr-2 font-normal text-gray-400">:</span>
                     {painting.stockStatus === "available" ? (
                        <span className="text-emerald-600">Available</span>
                     ) : (
                        <span className="text-rose-600">Made to Order</span>
                     )}
                  </p>
               </div>
            </div>

            <Button color="primary" className="mt-6 sm:mt-10 w-full max-w-64">
               Buy now
            </Button>
         </div>
      </section>
   );
};

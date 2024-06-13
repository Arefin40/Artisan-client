import { Link, useParams } from "react-router-dom";
import { useFetch } from "@hooks";
import LoadingState from "@components/LoadingState";
import StarRating from "@containers/StarRating";

const SubcategoryCard = ({ painting }) => {
   return (
      <div className="p-6 grid sm:flex gap-x-5 gap-y-6 rounded-lg bg-gray-100 dark:bg-neutral-700">
         <div className="sm:w-56 md:w-48 border-4 border-black bg-white flex items-center justify-center flex-shrink-0 dark:shadow-lg dark:shadow-black/60">
            <div className="p-3 w-full h-full">
               <img
                  src={painting.photoUrl}
                  className="object-cover object-center aspect-[3/2] sm:aspect-square sm:w-full sm:h-full md:aspect-auto md:h-[10rem]"
               />
            </div>
         </div>

         <div className="grid gap-y-1 content-start">
            <Link to={`/painting/${painting._id}`} className="block">
               <p className="font-semibold text-lg text-gray-800 dark:text-neutral-100">
                  {painting.itemName}
               </p>
            </Link>
            <div className="flex items-center gap-x-3 divide-x text-sm">
               <p className="flex gap-x-2">
                  by:
                  <span className="inline-block text-gray-800 dark:text-neutral-100 font-medium">
                     {painting.username}
                  </span>
               </p>

               <StarRating rating={painting.rating} className="pl-3" />
            </div>

            <div className="flex items-center gap-x-4">
               <h1>Processing time :</h1>
               <p className="leading-8 text-gray-800 dark:text-neutral-100">
                  {painting.processingTime}
               </p>
            </div>

            <p className="leading-8">{painting.description}</p>
            <div className="flex items-center gap-x-4">
               <p className="leading-8 text-lg text-gray-800 dark:text-neutral-100 font-semibold">
                  ${painting.price}
               </p>
               ·
               <Link to={`/painting/${painting._id}`} className="text-primary-500">
                  View details
               </Link>
            </div>
         </div>
      </div>
   );
};

const SubcategoryPage = () => {
   const { subcategory } = useParams();
   const { data: paintings, isLoading } = useFetch(`/paintings?subcategory=${subcategory}`);

   if (isLoading) return <LoadingState />;

   return (
      <section className="mt-4 lg:mt-8 grid gap-y-6 lg:gap-y-12">
         <header className="px-8 py-14 bg-primary-50 dark:bg-neutral-700 text-3xl lg:text-5xl font-extrabold text-primary-500 text-center rounded-lg">
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} Paintings
         </header>

         <main className="grid gap-y-6">
            {paintings?.map((painting) => (
               <SubcategoryCard key={painting._id} painting={painting} />
            ))}
         </main>
      </section>
   );
};
export default SubcategoryPage;

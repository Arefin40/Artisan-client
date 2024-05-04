import { Link } from "react-router-dom";

export default ({ className, data }) => {
   return (
      <Link to={`/paintings/${data._id}`}>
         <div
            className={`relative w-full border rounded-2xl flex items-center justify-center ${className} overflow-hidden isolate`}
         >
            <img src={data?.photoUrl} className="w-full h-full object-cover" />
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm bg-white text-gray-800 rounded-full backdrop-filter backdrop-blur-md bg-opacity-50 font-medium">
               {data?.subcategory.charAt(0).toUpperCase() +
                  data?.subcategory.slice(1)}
            </span>

            <div className="p-5 absolute inset-x-0 top-1/2 bottom-0 grid gap-y-1 content-end bg-gradient-to-b from-black/0 to-black/80 z-10 text-white font-semibold text-lg">
               <h1>{data?.itemName}</h1>
               <p>${data?.price}</p>
            </div>
         </div>
      </Link>
   );
};

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetch } from "@hooks";
import { useAuth } from "@contexts/AuthContext";
import { Select } from "@components/Form";
import { Edit, Delete } from "@icons";
import toast from "react-hot-toast";
import DeleteModal from "@containers/DeleteModal";
import StarRating from "@containers/StarRating";
import axios from "@hooks/axios";

const ArtworkCard = ({ painting }) => {
   const [open, setOpen] = useState(false);

   const deleteArtwork = (id) => {
      fetch(`https://artisan-server.vercel.app/paintings/${id}`, {
         method: "DELETE",
      })
         .then(() => {
            toast.success("Deleted successfully!");
            setOpen(false);
         })
         .catch((err) => console.error(err));
   };

   return (
      <>
         <div className="grid gap-y-3 sm:gap-y-6 group w-full text-sm sm:text-base">
            <div className="p-3 sm:p-5 max-h-full aspect-square border-[.375rem] sm:border-[.625rem] border-black shadow-xl">
               <div className="relative w-full h-full">
                  <img
                     src={painting.photoUrl}
                     className="w-full h-full object-cover object-center"
                  />

                  <div className="py-1 hidden absolute bottom-0 sm:bottom-6 inset-x-0 group-hover:flex justify-center gap-x-4 bg-white text-gray-800 backdrop-filter backdrop-blur-md bg-opacity-5">
                     <Link
                        to={`/painting/update/${painting._id}`}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-primary-500 backdrop-filter backdrop-blur-md bg-opacity-80 transform transition-all active:scale-90"
                     >
                        <Edit />
                     </Link>

                     <button
                        onClick={() => setOpen(true)}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-rose-500 backdrop-filter backdrop-blur-md bg-opacity-80 transform transition-all active:scale-90"
                     >
                        <Delete />
                     </button>
                  </div>
               </div>
            </div>

            <div className="grid gap-y-2 content-start sm:justify-items-center sm:text-center">
               <Link to={`/painting/${painting._id}`}>
                  <h1 className="text-gray-800 text-base sm:text-lg font-semibold">
                     {painting.itemName}
                  </h1>
               </Link>

               <div className="grid xl:flex items-center gap-1 sm:gap-2 text-sm xl:divide-x sm:justify-items-center">
                  <StarRating rating={painting.rating} />

                  <div className="xl:pl-2 grid sm:flex gap-1 sm:gap-2 sm:divide-x">
                     {painting.stockStatus === "available" ? (
                        <span className="text-emerald-600">In stock</span>
                     ) : (
                        <span className="text-rose-600">Out of stock</span>
                     )}

                     <span className="sm:pl-2">{!painting.customizable && "Not"} Customizable</span>
                  </div>
               </div>

               <h3 className="sm:mt-2 text-primary-600 text-lg sm:text-xl font-semibold">
                  ${painting.price}
               </h3>
            </div>
         </div>

         {open && (
            <DeleteModal
               active={open}
               onCancel={() => setOpen(false)}
               onConfirmDelete={() => deleteArtwork(painting._id)}
            />
         )}
      </>
   );
};

const Paintings = ({ user }) => {
   const [paintings, setPaintings] = useState([]);
   const [customizable, setCustomizable] = useState("all");

   useEffect(() => {
      if (user) {
         axios
            .get(`/paintings?email=${user?.email}&customizable=${customizable}`)
            .then((res) => setPaintings(res.data))
            .catch((err) => err.message);
      }
   }, [user, customizable]);

   return (
      <>
         <div className="py-2 flex justify-center text-sm sm:text-base">
            <div className="grid sm:flex gap-y-2 gap-x-3 items-center justify-items-center">
               <Select
                  label="Customization:"
                  name="filterBy"
                  className="flex items-center gap-x-2"
                  disabledDefault={false}
                  defaultOption={{ label: "Show all", value: "all" }}
                  onChange={(e) => setCustomizable(e.target.value)}
                  options={[
                     { label: "Customizable", value: "customizable" },
                     { label: "Not customizable", value: "not-customizable" },
                  ]}
               />
            </div>
         </div>

         <main className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {paintings?.map((painting) => (
               <ArtworkCard key={painting._id} painting={painting} />
            ))}
         </main>
      </>
   );
};

export default () => {
   const { currentUser } = useAuth();

   return (
      <section className="mt-4 lg:mt-8 grid gap-y-6 lg:gap-y-12">
         <header className="px-8 py-14 bg-primary-50 text-3xl lg:text-5xl font-extrabold text-primary-500 text-center rounded-lg">
            <h1>My Arts & Crafts</h1>
         </header>

         <Paintings user={currentUser} />
      </section>
   );
};

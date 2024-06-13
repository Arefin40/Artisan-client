import { Link } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import { useDropdown } from "@hooks";
import { Menu, Account } from "@icons";

const DropdownMenu = ({ onLogOut, userData }) => {
   const navigations = [
      {
         path: "/my-arts-and-crafts",
         label: "My Arts & Crafts",
      },
      {
         path: "/paintings/add",
         label: "Add Crafts Item",
      },
   ];

   return (
      <ul className="py-2 mt-2 hidden lg:grid absolute right-0 top-full w-48 bg-white dark:bg-neutral-700 shadow-md rounded-md text-sm font-medium z-50 border dark:border-neutral-700 text-gray-600 dark:text-neutral-400 dark:border-neutral-700/50 dark:shadow-black/50">
         {userData ? (
            <>
               <div className="mx-2 pb-2 mb-2 flex items-center gap-x-3 border-b dark:border-neutral-600">
                  <img
                     src={userData?.photoURL}
                     className="w-8 h-8 rounded-full border dark:border-neutral-700"
                  />
                  <h3 className="text-gray-800 dark:text-neutral-400">{userData?.displayName}</h3>
               </div>

               {navigations.map(({ path, label }) => (
                  <Link
                     key={path}
                     to={path}
                     className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 dark:hover:bg-neutral-600 hover:text-gray-800 dark:hover:text-neutral-300"
                  >
                     <span>{label}</span>
                  </Link>
               ))}

               <button
                  onClick={onLogOut}
                  className="w-full px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 dark:hover:bg-neutral-600 hover:text-gray-800 dark:hover:text-neutral-300"
               >
                  <span>Log out</span>
               </button>
            </>
         ) : (
            <>
               <Link
                  to="/register"
                  className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 text-gray-800 rounded-md"
               >
                  <span>Sign up</span>
               </Link>

               <Link
                  to="/login"
                  className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 hover:text-gray-800 rounded-md"
               >
                  <span>Log in</span>
               </Link>
            </>
         )}
      </ul>
   );
};

const TriggerButton = ({ onClick, userData, className = "flex" }) => {
   return (
      <button
         onClick={onClick}
         className={`p-1.5 ${className} items-center gap-x-3 border dark:border-neutral-700 rounded-full`}
      >
         <div className="ml-2 w-5 h-5 flex items-center justify-center flex-shrink-0">
            <Menu className="w-4 h-4" />
         </div>

         {userData ? (
            <img
               src={userData?.photoURL}
               className="w-7 h-7 rounded-full border dark:border-neutral-700 flex-shrink-0"
            />
         ) : (
            <Account className="w-7 h-7 rounded-full border dark:border-neutral-700 flex-shrink-0" />
         )}
      </button>
   );
};

export default ({ onClickButton }) => {
   const { currentUser, signOut } = useAuth();
   const { ref, isVisible, hide, toggleVisibility } = useDropdown();

   return (
      <div ref={ref} className="relative w-full max-w-36 flex items-center justify-end">
         <TriggerButton onClick={onClickButton} userData={currentUser} className="flex lg:hidden" />

         <TriggerButton
            onClick={toggleVisibility}
            userData={currentUser}
            className="hidden lg:flex"
         />

         {isVisible && <DropdownMenu userData={currentUser} onLogOut={signOut} onClose={hide} />}
      </div>
   );
};

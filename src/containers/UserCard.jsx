import { LogOut } from "@icons";
import { useAuth } from "@contexts/AuthContext";
import Avatar from "@components/Avatar";

export default ({
   className = "p-3 min-w-72 absolute top-full right-0 shadow-md border dark:border-neutral-700 rounded-md whitespace-nowrap z-40 animate-scale-in",
}) => {
   const { currentUser, signOut } = useAuth();

   return (
      <div
         className={`${className} grid bg-transparent flex-shrink-0 text-gray-800 dark:text-gray-400`}
      >
         <div className="p-2 flex items-center gap-x-4 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg">
            <Avatar
               size="w-9 h-9"
               className="rounded-full font-semibold bg-primary-500 text-white border dark:border-neutral-700"
               src={currentUser?.photoURL}
            />
            <h1 className="tex-lg font-semibold">{currentUser?.displayName}</h1>
         </div>

         <div className="my-1 w-full border-b dark:border-neutral-700" />

         <button
            onClick={signOut}
            className="p-2 flex items-center gap-x-4 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg group"
         >
            <div className="w-9 h-9 flex items-center justify-center bg-gray-200 dark:bg-neutral-600 rounded-full overflow-hidden">
               <LogOut className="w-5 h-5 text-gray-600 dark:text-neutral-400 group-hover:text-gray-700 dark:group-hover:text-neutral-400" />
            </div>
            <span>Log out</span>
         </button>
      </div>
   );
};

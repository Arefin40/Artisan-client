import Backdrop from "@components/Backdrop";
import Button from "@components/Button";
import { Warning } from "@icons";

export default ({ onConfirmDelete, onCancel, active = false }) => {
   return (
      <>
         <Backdrop onClick={onCancel} active={active} />;
         <div className="w-full max-w-lg p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="p-5 lg:p-10 grid gap-y-4 lg:gap-y-6 bg-white rounded-xl text-center text-sm sm:text-base">
               <div className="w-16 h-16 flex items-center justify-center rounded-full flex-shrink-0 bg-rose-50 justify-self-center">
                  <Warning />
               </div>

               <h1 className="text-gray-900 font-semibold text-lg md:text-xl">
                  Are you sure?
               </h1>

               <p className="max-w-96 mx-auto">
                  This action cannot be undone. It will be deleted from our
                  database.
               </p>

               <div className="grid gap-y-3">
                  <Button onClick={onConfirmDelete} color="error">
                     Delete artwork
                  </Button>
                  <Button onClick={onCancel} variant="outlined">
                     Cancel
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
};

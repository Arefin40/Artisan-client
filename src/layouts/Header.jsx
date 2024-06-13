import { NavLink } from "react-router-dom";
import { useVisibility } from "@hooks";
import { useAuth } from "@contexts/AuthContext";
import Drawer from "@components/Drawer";
import Button from "@components/Button";
import UserCard from "@containers/UserCard";
import UserMenu from "@containers/UserMenu";
import BrandLogo from "@containers/BrandLogo";
import classNames from "@utils/classNames";

const navigations = [
   {
      path: "/",
      label: "Home",
   },
   {
      path: "/paintings",
      label: "Arts & Crafts",
   },
   {
      path: "/my-arts-and-crafts",
      label: "My Arts & Crafts",
      userOnly: true,
   },
   {
      path: "/paintings/add",
      label: "Add Crafts Item",
      userOnly: true,
   },
   {
      path: "/contact",
      label: "Contact us",
   },
];

export default () => {
   const { currentUser } = useAuth();
   const { isVisible, toggle, hide } = useVisibility(false);

   const navMenuClasses = (isActive = false, isUserOnly) =>
      classNames({
         "text-primary-500": isActive,
         "lg:hidden": isUserOnly,
      });

   return (
      <header className="w-full sticky inset-x-0 top-0 z-40 bg-white dark:bg-neutral-800 border-b dark:border-neutral-900">
         <section className="px-5 sm:px-8 h-16 lg:h-auto lg:py-5 mx-auto container flex items-center justify-between">
            <BrandLogo className="max-w-52" />

            <Drawer
               open={isVisible}
               onClose={hide}
               className="top-16 lg:static flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-full lg:max-w-none lg:translate-x-0 border-t dark:border-neutral-700 lg:border-0 dark:bg-neutral-800 transition-transform"
            >
               <ul className="p-6 lg:p-0 text-base grid lg:flex lg:justify-center items-center gap-x-12 gap-y-6 font-medium text-gray-700 dark:text-gray-400">
                  {navigations.map(({ path, label, userOnly = false }) => (
                     <NavLink
                        end
                        to={path}
                        key={path}
                        onClick={hide}
                        className={({ isActive }) => navMenuClasses(isActive, userOnly)}
                     >
                        {label}
                     </NavLink>
                  ))}
               </ul>

               <div className="m-2 mb-5 mt-auto rounded-lg lg:hidden">
                  {currentUser ? (
                     <UserCard className="w-full text-sm" />
                  ) : (
                     <Button to="/login" color="primary" size="large" className="w-full">
                        Login
                     </Button>
                  )}
               </div>
            </Drawer>

            <UserMenu onClickButton={toggle} />
         </section>
      </header>
   );
};

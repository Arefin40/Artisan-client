import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Facebook, Twitter, Instagram, Github } from "@icons";
import BrandLogo from "@containers/BrandLogo";
import { useState } from "react";

const DarkMode = () => {
   const [checked, setChecked] = useState();

   useEffect(() => {
      const theme = localStorage.getItem("theme") || "light";
      setChecked(theme === "dark");
   }, []);

   useEffect(() => {
      if (checked) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else if (checked !== undefined) {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [checked]);

   const toggleDarkMode = () => setChecked((prev) => !prev);

   const trackClass = checked ? "bg-primary-500" : "bg-gray-200 dark:bg-gray-700";
   const thumbClass = checked ? "left-[1.125rem] bg-white" : "left-0.5 bg-white dark:bg-gray-400";

   return (
      <button onClick={toggleDarkMode} className="flex justify-center gap-x-3 text-sm group">
         <span>Dark mode:</span>
         <div className={`relative w-9 h-5 rounded-full ${trackClass}`}>
            <div
               className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-sm transition-all ${thumbClass}`}
            />
         </div>
      </button>
   );
};

export default () => {
   return (
      <section className="px-5 lg:px-0 py-12 lg:py-24 mx-auto container grid gap-y-10 justify-items-center text-center text-gray-700 dark:text-gray-400">
         <BrandLogo className="justify-center" />

         <ul className="grid grid-cols-2 lg:flex items-center gap-6 lg:gap-x-12 text-sm">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         </ul>

         <div className="flex items-center gap-x-10 text-gray-400">
            <Facebook />
            <Instagram />
            <Twitter />
            <Github />
         </div>

         <DarkMode />

         <small className="text-gray-500">© 2024 Artisan.com. All rights reserved.</small>
      </section>
   );
};

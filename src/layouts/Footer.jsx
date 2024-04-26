import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "@icons";
import BrandLogo from "@containers/BrandLogo";

export default () => {
   return (
      <section className="px-5 lg:px-0 py-12 lg:py-24 mx-auto container grid gap-y-10 justify-items-center text-center text-gray-700">
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

         <small className="text-gray-500">
            © 2024 Artisan.com. All rights reserved.
         </small>
      </section>
   );
};

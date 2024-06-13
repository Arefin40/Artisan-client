export default ({ heading }) => {
   return (
      <div className="py-6 lg:py-8 mb-6 lg:mb-12 grid justify-items-center gap-y-4 lg:gap-y-6 text-center border-t border-b border-dashed border-neutral-500">
         <h1 className="font-bold text-xl lg:text-4xl text-gray-800 dark:text-neutral-100">
            {heading}
         </h1>
      </div>
   );
};

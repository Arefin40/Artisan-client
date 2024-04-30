export default ({ heading, children }) => {
   return (
      <div class="py-6 lg:py-8 mb-6 lg:mb-12 grid justify-items-center gap-y-4 lg:gap-y-6 text-center border-t border-b border-dashed">
         <h1 class="font-bold text-xl lg:text-4xl text-gray-800">{heading}</h1>
         <h4 class="max-w-lg ">{children}</h4>
      </div>
   );
};

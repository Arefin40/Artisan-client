export default () => {
   return (
      <section className="px-8 py-12 grid gap-y-8 justify-items-center rounded-2xl bg-primary-100 dark:bg-primary-900">
         <div className="grid gap-y-3 justify-items-center text-center">
            <h1 className="font-extrabold text-4xl text-neutral-800 dark:text-neutral-100">
               Subscribe to our newsletter
            </h1>
            <p className="text-lg dark:text-neutral-100/60">
               Get notified every time we add new painting in the collection!
            </p>
         </div>
         <div className="flex w-full max-w-lg">
            <input
               type="email"
               name="email"
               id="email"
               placeholder="Enter your email"
               className="h-14 px-8 w-full outline-none rounded-l-full text-lg border-r-0 border-primary-200"
            />
            <button className="h-14 px-4 sm:px-8 rounded-r-full bg-primary-500 text-white font-medium text-lg">
               SUBSCRIBE
            </button>
         </div>
      </section>
   );
};

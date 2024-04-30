import Button from "@components/Button";
import { Input } from "@components/Form";
import { useForm } from "react-hook-form";
import classNames from "@utils/classNames";
import toast from "react-hot-toast";
import { getEmailValidationSchema } from "@utils/ValidationSchema";

export default () => {
   const subcategories = [
      "Landscape",
      "Portrait",
      "Watercolour",
      "Oil",
      "Charcoal",
      "Cartoon",
   ];

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      try {
         const response = await fetch("http://localhost:3000/paintings/add", {
            method: "POST", // or 'PUT'
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         await response.json();
         toast.success("Item added successfully");
         reset();
      } catch (error) {
         toast.error(error);
      }
   };

   const textareaClass = classNames({
      "focus:ring-primary-100 focus:border-primary-500":
         !errors?.["description"],
      "focus:ring-rose-100 border-rose-500 focus:border-rose-500":
         errors?.["description"],
   });

   return (
      <section className="p-4 lg:p-8 w-full bg-auth-login">
         <div className="mx-auto w-full max-w-lg">
            <div className="mb-8 sm:mb-12 text-center">
               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                  Add art & Craft
               </h2>
               <p className="mt-2 leading-8 text-gray-600">
                  Please fillup the following fields to add your item
               </p>
            </div>

            <form
               className="grid gap-y-6 w-full"
               onSubmit={handleSubmit(onSubmit)}
            >
               <div className="grid gap-y-2">
                  <label
                     htmlFor="subcategory"
                     className="text-sm font-semibold text-gray-900"
                  >
                     Subcategory
                  </label>
                  <select
                     id="subcategory"
                     value={subcategories[0]}
                     {...register("subcategory")}
                     className="p-3 h-[2.875rem] focus:ring-primary-100 focus:border-primary-500 shadow-sm border-gray-300 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 appearance-none placeholder-gray-500"
                  >
                     {subcategories.map((category) => (
                        <option key={category} value={category.toLowerCase()}>
                           {category}
                        </option>
                     ))}
                  </select>
               </div>

               <Input
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  errors={errors}
                  {...register("username", {
                     required: "Username is required",
                  })}
               />

               <Input
                  label="Email"
                  type="text"
                  placeholder="Enter your email"
                  errors={errors}
                  {...register(
                     "email",
                     getEmailValidationSchema({ required: true })
                  )}
               />

               <Input
                  label="Item Name"
                  type="text"
                  placeholder="Enter your item name"
                  errors={errors}
                  {...register("itemName", {
                     required: "Item name is required",
                  })}
               />

               <Input
                  label="Photo Url"
                  type="text"
                  placeholder="Enter your item photo url"
                  errors={errors}
                  {...register("photoUrl", {
                     required: "Photourl is required",
                  })}
               />

               <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-900 ">
                     Description
                  </label>
                  <textarea
                     rows="4"
                     {...register("description", {
                        required: "Description is required",
                     })}
                     className={`block p-3 w-full text-sm text-gray-900 rounded-md border border-gray-300 outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 shadow-sm ${textareaClass}`}
                     placeholder="Enter your item description"
                  ></textarea>

                  {errors?.["description"] && (
                     <span className="text-sm text-rose-500">
                        {errors["description"].message}
                     </span>
                  )}
               </div>

               <div className="grid grid-cols-2 gap-x-6">
                  <Input
                     label="Price"
                     type="number"
                     placeholder="Enter your item price"
                     errors={errors}
                     {...register("price", { required: "Price is required" })}
                  />
                  <Input
                     label="Processing Time"
                     type="number"
                     placeholder="Enter your item processing item"
                     errors={errors}
                     {...register("processingTime", {
                        required: "Processing time is required",
                     })}
                  />
               </div>

               <div
                  className="flex items-center gap-x-12 gap-y-5
               flex-wrap"
               >
                  <div className="grid gap-y-2">
                     <div className="flex items-center gap-x-2">
                        <span className="text-sm font-semibold text-gray-900">
                           Rating:
                        </span>
                        <div className="flex items-center gap-x-4">
                           <label className="flex items-center gap-x-1">
                              <input
                                 type="radio"
                                 name="rating"
                                 value="1"
                                 {...register("rating", {
                                    required: "Rating is required",
                                 })}
                              />
                              1
                           </label>
                           <label className="flex items-center gap-x-1">
                              <input
                                 type="radio"
                                 name="rating"
                                 value="2"
                                 {...register("rating", {
                                    required: "Rating is required",
                                 })}
                              />
                              2
                           </label>
                           <label className="flex items-center gap-x-1">
                              <input
                                 type="radio"
                                 name="rating"
                                 value="3"
                                 {...register("rating", {
                                    required: "Rating is required",
                                 })}
                              />
                              3
                           </label>
                           <label className="flex items-center gap-x-1">
                              <input
                                 type="radio"
                                 name="rating"
                                 value="4"
                                 {...register("rating", {
                                    required: "Rating is required",
                                 })}
                              />
                              4
                           </label>
                           <label className="flex items-center gap-x-1">
                              <input
                                 type="radio"
                                 name="rating"
                                 value="5"
                                 {...register("rating", {
                                    required: "Rating is required",
                                 })}
                              />
                              5
                           </label>
                        </div>
                     </div>

                     {errors?.["rating"] && (
                        <span className="text-sm text-rose-500">
                           {errors["rating"].message}
                        </span>
                     )}
                  </div>

                  <label className="flex items-center gap-x-2 select-none text-sm font-semibold text-gray-900">
                     <input type="checkbox" {...register("customizable")} />
                     Customizable
                  </label>
               </div>

               <div className="grid gap-y-2">
                  <div className="flex items-center gap-x-2">
                     <span className="text-sm font-semibold text-gray-900">
                        Stock:
                     </span>
                     <div className="flex items-center gap-x-4">
                        <label className="flex items-center gap-x-1">
                           <input
                              type="radio"
                              value="available"
                              {...register("stock", {
                                 required: "Stock status is required",
                              })}
                           />
                           Available
                        </label>
                        <label className="flex items-center gap-x-1">
                           <input
                              type="radio"
                              value="out-of-stock"
                              {...register("stock", {
                                 required: "Stock status is required",
                              })}
                           />
                           Out of stock
                        </label>
                     </div>
                  </div>
                  {errors?.["stock"] && (
                     <span className="text-sm text-rose-500">
                        {errors["stock"].message}
                     </span>
                  )}
               </div>

               <Button type="submit" color="primary">
                  Add item
               </Button>
            </form>
         </div>
      </section>
   );
};

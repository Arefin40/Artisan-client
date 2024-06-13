import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Input,Textarea, Select, Checkbox, Radio, RadioGroup } from "@components/Form"; //prettier-ignore
import { getEmailValidationSchema } from "@utils/ValidationSchema";
import { useAuth } from "@contexts/AuthContext";
import Button from "@components/Button";
import Star from "@icons/Star";

export default () => {
   const { currentUser } = useAuth();

   const subcategories = [
      { label: "Landscape", value: "landscape" },
      { label: "Portrait", value: "portrait" },
      { label: "Watercolour", value: "watercolour" },
      { label: "Oil", value: "oil" },
      { label: "Charcoal", value: "charcoal" },
      { label: "Cartoon", value: "cartoon" },
   ];

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         username: currentUser.displayName || "",
         email: currentUser.email || "",
      },
   });

   const onSubmit = (data) => {
      fetch("https://artisan-server.vercel.app/paintings", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then(() => {
            toast.success("Item added successfully");
            reset();
         })
         .catch((error) => toast.error(error));
   };

   return (
      <section className="mt-4 lg:mt-8">
         <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800 dark:text-neutral-100">
               Add art &amp; Craft
            </h2>
            <p className="mt-2 leading-8 text-gray-600 dark:text-neutral-400">
               Please fillup the following fields to add your item
            </p>
         </div>

         <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-screen-md grid gap-x-10 lg:gap-x-16 gap-y-6"
         >
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
               <Input
                  disabled
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  errors={errors}
                  {...register("username", {
                     required: "Username is required",
                  })}
               />

               <Input
                  disabled
                  label="Email"
                  type="text"
                  placeholder="Enter your email"
                  errors={errors}
                  {...register("email", getEmailValidationSchema({ required: true }))}
               />
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
               <Input
                  label="Item Name"
                  type="text"
                  placeholder="Enter your item name"
                  errors={errors}
                  {...register("itemName", {
                     required: "Item name is required",
                  })}
               />

               <Select
                  label="Subcategory"
                  options={subcategories}
                  errors={errors}
                  {...register("subcategory", {
                     validate: (value) => (value !== "-" ? true : "Subcategory is required"),
                  })}
               />
            </div>

            <Input
               type="text"
               label="Photo Url"
               placeholder="Enter your item photo url"
               errors={errors}
               {...register("photoUrl", {
                  required: "Photourl is required",
               })}
            />

            <Textarea
               label="Description"
               placeholder="Enter your item description"
               errors={errors}
               {...register("description", {
                  required: "Description is required",
               })}
            />

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
               className="flex items-center gap-x-12 gap-y-6
               flex-wrap"
            >
               <RadioGroup
                  label="Rating:"
                  errors={errors}
                  {...register("rating", {
                     required: "Rating is required",
                  })}
                  className="flex gap-x-2 items-center flex-row-reverse"
               >
                  {[5, 4, 3, 2, 1].map((rating) => (
                     <Radio key={rating} value={rating} className="flex items-center rating">
                        <Star className="w-4 h-4" />
                     </Radio>
                  ))}
               </RadioGroup>

               <RadioGroup
                  label="Stock:"
                  errors={errors}
                  {...register("stockStatus", {
                     required: "Stock status is required",
                  })}
               >
                  <Radio withAppearance value="available">
                     Available
                  </Radio>
                  <Radio withAppearance value="out-of-stock">
                     Out of stock
                  </Radio>
               </RadioGroup>

               <Checkbox errors={errors} {...register("customizable")}>
                  Customizable
               </Checkbox>
            </div>

            <Button
               type="submit"
               color="primary"
               className="mt-12 justify-self-center max-w-64 w-full"
            >
               Add Artwork
            </Button>
         </form>
      </section>
   );
};

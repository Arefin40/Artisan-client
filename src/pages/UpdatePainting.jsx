import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Radio, RadioGroup, Select, Textarea, Checkbox } from "@components/Form"; //prettier-ignore
import Button from "@components/Button";
import Star from "@icons/Star";
import { useParams } from "react-router-dom";

export default () => {
   const subcategories = [
      { label: "Landscape", value: "landscape" },
      { label: "Portrait", value: "portrait" },
      { label: "Watercolour", value: "watercolour" },
      { label: "Oil", value: "oil" },
      { label: "Charcoal", value: "charcoal" },
      { label: "Cartoon", value: "cartoon" },
   ];

   let { id } = useParams();
   const [painting, setPainting] = useState({});

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         photoUrl: painting.photoUrl,
         subcategory: painting.subcategory,
         itemName: painting.itemName,
         description: painting.description,
         price: painting.price,
         processingTime: painting.processingTime,
         stockStatus: painting.stockStatus,
         customizable: painting.customizable,
         rating: painting.rating,
      },
   });

   useEffect(() => {
      fetch(`https://artisan-server.vercel.app/paintings/${id}`)
         .then((res) => res.json())
         .then((data) => setPainting(data))
         .catch((err) => console.error(err));
   }, []);

   useEffect(() => {
      const { _id, ...rest } = painting;
      reset({ ...rest });
   }, [painting]);

   const onSubmit = (data) => {
      fetch(`https://artisan-server.vercel.app/paintings/${painting._id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => {
            toast.success("Updated successfully!");
            return res.json();
         })
         .then(({ updated }) => setPainting({ ...painting, ...updated }))
         .catch((err) => {
            toast.error("Failed to update!");
            console.error(err);
         });
   };

   return (
      <section className="mt-4 lg:mt-8">
         <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800 dark:text-neutral-100">
               Update art &amp; Craft
            </h2>
            <p className="mt-2 leading-8 text-gray-600 dark:text-neutral-400">
               Make necessary changes to update your item
            </p>
         </div>

         <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 lg:grid-cols-[24rem_1fr] gap-x-10 lg:gap-x-16 gap-y-6"
         >
            <div className="grid gap-y-8 content-start">
               <div className="p-6 border-[.625rem] bg-white border-black shadow-xl dark:shadow-black/60">
                  <img src={painting.photoUrl} className="object-cover aspect-square" />
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

               <Select
                  label="Subcategory"
                  options={subcategories}
                  errors={errors}
                  {...register("subcategory", {
                     validate: (value) => (value !== "-" ? true : "Subcategory is required"),
                  })}
               />
            </div>

            <div className="grid gap-y-6 content-start">
               <Input
                  label="Item Name"
                  type="text"
                  placeholder="Enter your item name"
                  errors={errors}
                  {...register("itemName", {
                     required: "Item name is required",
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
                  className="flex items-center gap-x-12 gap-y-5
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

                  <Checkbox errors={errors} {...register("customizable")}>
                     Customizable
                  </Checkbox>
               </div>

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

               <Button type="submit" color="primary" className="justify-self-start">
                  Submit Change
               </Button>
            </div>
         </form>
      </section>
   );
};

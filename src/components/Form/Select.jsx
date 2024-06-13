import { forwardRef } from "react";
import classNames from "@utils/classNames";

export default forwardRef(
   (
      {
         label,
         name,
         disabledDefault = true,
         defaultOption = { value: "-", label: "Select one" },
         className = "grid gap-y-2",
         options,
         errors,
         onChange,
         onBlur,
      },
      ref
   ) => {
      const errorClass = classNames({
         "focus:ring-primary-100 focus:border-primary-500": !errors?.[name],
         "focus:ring-rose-100 border-rose-500 focus:border-rose-500": errors?.[name],
      });

      return (
         <div className={className}>
            <label
               htmlFor={name}
               className="text-sm font-semibold text-gray-900 dark:text-neutral-100"
            >
               {label}
            </label>
            <select
               ref={ref}
               id={name}
               name={name}
               onChange={onChange}
               onBlur={onBlur}
               defaultValue={defaultOption.value}
               className={`p-3 h-[2.875rem] shadow-sm dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 text-sm text-gray-900 dark:text-neutral-200 rounded-md border outline-none focus:ring-2 appearance-none placeholder-gray-500 dark:placeholder-neutral-400 ${errorClass}`}
            >
               <option value={defaultOption.value} disabled={disabledDefault}>
                  {defaultOption.label}
               </option>
               {options.map(({ label, value }) => (
                  <option key={value} value={value}>
                     {label}
                  </option>
               ))}
            </select>
            {errors?.[name] && (
               <span className="text-sm text-rose-500">{errors[name].message}</span>
            )}
         </div>
      );
   }
);

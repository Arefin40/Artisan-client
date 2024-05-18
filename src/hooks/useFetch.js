import axios from "@hooks/axios";
import { useState, useEffect } from "react";

const useFetch = (url, enabled = true) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   if (enabled) {
      useEffect(() => {
         setIsLoading(true);
         (async () => {
            try {
               const { data } = await axios.get(url);
               setData(data);
            } catch (err) {
               console.error("Failed to fetch", err.message);
            } finally {
               setIsLoading(false);
            }
         })();
      }, [url]);
   }

   return { data, isLoading };
};
export default useFetch;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: (
               <div className="min-h-screen flex items-center justify-center">
                  <h1 className="font-display text-6xl font-bold text-gray-800">
                     Hello World!
                  </h1>
               </div>
            ),
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};

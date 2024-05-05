import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import PrivateRoute from "@layouts/PrivateRoute";
import ErrorPage from "@pages/ErrorPage";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Homepage from "@pages/Homepage";
import Contact from "@pages/Contact";
import PaintingDetails from "@pages/PaintingDetails";
import AddPainting from "@pages/AddPainting";
import ArtsAndCrafts from "@pages/ArtsAndCrafts";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Homepage />,
            loader: () => fetch("https://artisan-server.vercel.app"),
         },
         {
            path: "/paintings/:subcategory?",
            element: <ArtsAndCrafts />,
            loader: async ({ params }) => { 
               return params.subcategory
                     ? fetch(`https://artisan-server.vercel.app/paintings?subcategory=${params.subcategory}`)
                     : fetch("https://artisan-server.vercel.app/paintings");
             },
         },
         {
            path: "/painting/:id",
            element: (
               <PrivateRoute>
                  <PaintingDetails />
               </PrivateRoute>
            ),
            loader: async ({ params }) => fetch(`https://artisan-server.vercel.app/paintings/${params.id}`),
         },
         {
            path: "/paintings/add",
            element: (
               <PrivateRoute>
                  <AddPainting />
               </PrivateRoute>
            ),
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};

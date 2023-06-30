import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import routes from "../routes";
 
  const router = createBrowserRouter(routes);
export default function RouterAppProvider() {
    return <RouterProvider router={router} />;
}
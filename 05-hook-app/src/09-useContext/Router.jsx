import { createBrowserRouter } from "react-router-dom";
import routesConfig from "./routesConfig";


export const Router = () => {
    const router = createBrowserRouter(routesConfig);
 
  return router;
}
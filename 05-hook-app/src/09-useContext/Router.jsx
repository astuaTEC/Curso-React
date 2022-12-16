import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { MainApp } from "./MainApp";


export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainApp />,
            errorElement: <Navigate to="about" />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "login",
                    element: <LoginPage />,
                },
                {
                    path: "about",
                    element: <AboutPage />,
                },
            ]
        }
    ]);
 
  return router;
}
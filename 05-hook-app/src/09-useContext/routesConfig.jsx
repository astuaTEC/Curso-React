import { Navigate } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { MainApp } from "./MainApp";

const routesConfig =
    [
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
    ];


export default routesConfig;
import { render, screen } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "../../src/09-useContext/routesConfig";


describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage', () => {

        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/"],
        });

        render(<RouterProvider router={router} />);

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {

        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/login"],
        });

        render(<RouterProvider router={router} />);

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('debe de mostrar el AboutPage', () => {

        const router = createMemoryRouter(routesConfig, {
            initialEntries: ["/about"],
        });

        render(<RouterProvider router={router} />);

        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
})
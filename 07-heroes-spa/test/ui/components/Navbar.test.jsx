import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Benito'
        },
        logout: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
       
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {replace: true});

    })
})
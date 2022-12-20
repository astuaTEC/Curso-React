import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => {

    const setUserMock = jest.fn();

    const user = { id: 123, name: 'IlloJuan', email: 'illo@illo.com' };

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
    });


    test('debe de llamar el setUser cuando se hace click en el button', () => {

        render(
            <UserContext.Provider value={{ setUser: setUserMock, user }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith(user);

    })

})
import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el texto escrito en el input', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Prueba' } });

        expect(input.value).toBe('Prueba');
    })


    test('debe de cargar la nueva categoria y deben haber dos h3', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'One Puch' } });
        fireEvent.submit(form);

        expect(screen.getByText('Dragon Ball'));
        expect(screen.getByText('One Puch'));
        
        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);

        //expect(input.value).toBe('Prueba');
    })

    test('NO debe de cargarse una categoria repetida', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);

    })
})
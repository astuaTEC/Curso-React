import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Dragon Ball';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan la imagenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Sech',
                url: 'https://etesech.com'
            },
            {
                id: '123',
                title: 'Anuel',
                url: 'https://anuelAA.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

     })

})
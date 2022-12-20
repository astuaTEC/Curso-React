import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    test('debe de mostar el componente por defecto', () => { 
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
     });

     test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Illo', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        
        render(<MultipleCustomHooks />);

        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Illo') ).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

      });

      test('debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Illo', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        screen.debug()

        expect(mockIncrement).toHaveBeenCalled();

       });

 })
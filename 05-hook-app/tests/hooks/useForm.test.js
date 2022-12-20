import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm"


describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Illo Juan',
        email: 'illo@example.com'
    }


    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('debe de cambiar el nombre del formulario', () => { 
        
        const { result } = renderHook(() => useForm(initialForm));
        const newValue = 'Juan';

        act(() => {
            result.current.onInputChange({target: {name: 'name', value: newValue }});
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

     });

     test('debe de realizar el reset del formulario', () => { 
        
        const { result } = renderHook(() => useForm(initialForm));
        const newValue = 'Juan';

        act(() => {
            result.current.onInputChange({target: {name: 'name', value: newValue }});
            result.current.onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState).toEqual(initialForm);

     });
})
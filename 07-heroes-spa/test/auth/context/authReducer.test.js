import { authReducer, types } from "../../../src/auth";


describe('Pruebas en auth Reducer', () => {

    const initialState = {
        logged: false
    }

    test('debe de retornar el estado por defecto', () => {

        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe de llamar el login autenticar y estableces el user', () => {

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Saymon'
            }
        }

        const newState = authReducer(initialState, action);

        expect(newState).toEqual({
            logged: true,
            user: action.payload
        });

     });


     test('debe de borrar el name del usuario y logged en false', () => { 
        
        const state = {
            logged: true,
            user: {
                id: 'XYZ',
                name: 'Benito'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({ logged: false });


      })



})
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(testUser);

     });

     test('getUsuario debe de retornar un objeto ', () => { 
        
        const name = 'Saymon';

        const user = getUsuarioActivo(name);

        expect(name).toBe(user.username);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })

      })

 })
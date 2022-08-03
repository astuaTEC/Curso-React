
describe('Pruebas en <DemoComponent />', () => {


    test('Esta prueba no debe fallar', () => {

        // 1. Inicializar
        const message1 = 'Hola Mundo';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        // 3. Observar el resultado
        expect(message1).toBe(message2);
     });
     
 });


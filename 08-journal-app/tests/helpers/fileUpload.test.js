import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dnxt7nqdg',
    api_key: '479123734579297',
    api_secret:'O33tSBywtAFizqRnJDLO891EvvI',
    secure: true
})

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources(['journal-app/' + imageId], {
            resource_type: 'image'
        });

    });

    test('debe de retornar null', async() => { 
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);
        expect(url).toBe(null);

     })
})
import {getGif} from '../../helpers/getGifs';

describe('Pruebas con getFifs Featch', () => {
    test('Debe traer 10 elementos', async() =>{
        const gifs = await getGif('Pokemon');
        expect(gifs.length).toBe(10);
    })

    test('Trae la categoria por defecto', async() =>{
        const gifs = await getGif();
        expect(gifs.length).toBe(10);
    })


})
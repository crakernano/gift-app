import {useFeatchGifs} from '../../hooks/useFeatchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en useFeatchGifs />', ()=>{

    test('Debe devolver el estado inicial', async()=>{

        const{result, waitForNextUpdate} = renderHook(()=> useFeatchGifs('Pokemon'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);


    });

    test('Debe devolver las imagenes y no mostrar el estado de cargando', async()=>{
        const{result, waitForNextUpdate} = renderHook(()=> useFeatchGifs('Pokemon'));
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
})
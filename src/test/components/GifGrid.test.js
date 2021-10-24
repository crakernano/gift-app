import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFeatchGifs } from '../../hooks/useFeatchGifs';
jest.mock('../../hooks/useFeatchGifs');

describe('Pruebas en <GifGrid />', ()=>{

    const category = "Pokemon";
    

    test('Debe mostrarse correctamente', ()=>{


        useFeatchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar los items cuadno userFeatchGif devuelve datos', ()=>{
        
        const imgs = [{
            id: 'ABC',
            url: 'https://localhost/imagen.png',
            title: 'Titulo'
        }];
        
        useFeatchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    })
})
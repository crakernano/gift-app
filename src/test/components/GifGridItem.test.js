import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'


describe('Pruebas de <GifGridItem />', () => {

    const title = 'un titulo'
    const url = 'https://localhost/prueba.html'
    const wrapper = shallow( <GifGridItem title={title} url={url}/>)

    test('Debe de mostrar el componente correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el texto', () =>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );
    })

    test('debe mostrar la imagen con la URL de la imagen', ()=>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    })

    test('Debe tener una clase para la animación', ()=>{
        const div = wrapper.find('div');
        const classname = div.prop('className');
        expect(classname.includes('animate_fadeIn')).toBe(true);

    })

})
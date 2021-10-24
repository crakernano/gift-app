import React from 'react'
import { shallow } from 'enzyme';
import {GifExpertApp} from '../GifExpertApp'


describe('Pruebas en <AddCategory />', ()=>{

    //const wrapper = shallow(<GifExpertApp />);

    test('Debe mostrarse correctamente', ()=>{
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrarse correctamente', ()=>{
        const categorias = ["Pokemon", "Harry Potter"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);

    });
})
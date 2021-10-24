import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', ()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategories}/>);

    beforeEach(()=>{
        jest.setCategorias = jest.fn();
        wrapper = shallow(<AddCategory setCategorias={setCategories}/>);
    })
    test('Debe mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', ()=>{

        const input = wrapper.find('input');
        const value = 'value'
        input.simulate('change', {target:{value}});

        expect(wrapper).toMatchSnapshot();
    })

    test('No debe mandar la información', ()=>{
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe llamar al setCategories y vaciar la caja de texto', ()=>{
        const value = 'Hola';

        wrapper.find('input').simulate('change', {target:{value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })

})
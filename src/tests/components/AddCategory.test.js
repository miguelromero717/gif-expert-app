import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory";

describe('AddCategory tests', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';

        input.simulate('change', {
            target: { value }
        });
    })

    test('should not send information with submit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        });

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('should call setCategories and clean input text', () => {
        const value = 'New Category';
        //const input = wrapper.find('input');
        //const form = wrapper.find('form');

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    })


})
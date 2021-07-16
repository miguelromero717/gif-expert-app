import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe('GifGridItem tests', () => {
    let wrapper;
    const title = 'Test title';
    const url = 'https://localhost';

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    })

    test('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should has p with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('should has img with url and alt props', () => {
        const img =wrapper.find('img');
        
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('should has animate__fadeIn class', () => {
        const div = wrapper.find('div');

        expect(div.prop('className')).toContain('animate__fadeIn');
    })
    
})

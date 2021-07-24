import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid tests', () => {
    test('should render component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const category = 'Matrix';
        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when load images using useFetchGifs hook', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/image/any.jpg',
            title: 'Any Image Title'
        },
        {
            id: '123',
            url: 'https://localhost/image/any.jpg',
            title: 'Any Image Title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const category = 'Matrix';
        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})

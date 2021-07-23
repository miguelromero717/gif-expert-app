import { getGifs } from "../../helpers/getGifs"

describe('Helper getGifs tests', () => {

    test('should return ten elements', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    })

    test('should return empty array', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })


})

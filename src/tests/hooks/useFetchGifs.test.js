import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs hook tests', () => {
    test('should return inital state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading} = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })

    test('should returns images array and loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        
        const { data, loading} = result.current;
        
        expect(data.length).toEqual(10);
        expect(loading).toBeFalsy();
    })
    
})

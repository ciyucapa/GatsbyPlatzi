import {renderHook, act} from '@testing-library/react-hooks';
import useStars from '../../../src/hooks/useStars';

describe("useStars hook", () => {
    test("Render correct", () => {
        const {result} = renderHook(() => useStars());

        expect(result.current).toBeDefined();
        expect(result.current.onStars).toBeInstanceOf(Function);
    });

    test("stars components", () => {
        const {result} = renderHook(() => useStars())
        act(() => {
            result.current.onStars(1);
        })
        
        expect(result.current.stars).toBe(1);
    });
});
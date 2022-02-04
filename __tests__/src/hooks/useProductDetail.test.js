import {renderHook, act} from '@testing-library/react-hooks';
import useProductDetail from '../../../src/hooks/useProductDetail';

describe("useProductDetail hook", () => {
    test("Render correct", () => {
        const {result} = renderHook(() => useProductDetail());

        expect(result.current).toBeDefined();
        expect(result.current.size).toBe(2);
        expect(result.current.qty).toBe(1);
        expect(result.current.decreaseQuantity).toBeInstanceOf(Function);
        expect(result.current.handleSubmit).toBeInstanceOf(Function);
        expect(result.current.increasequantity).toBeInstanceOf(Function);
        expect(result.current.onSize).toBeInstanceOf(Function);
    });

    test("ProductDetail components", () => {
        const {result} = renderHook(() => useProductDetail())
        act(() => {
            result.current.onSize(1);
            result.current.decreaseQuantity();
            result.current.increasequantity();
        })
        
        expect(result.current.size).toBe(1);
        expect(result.current.qty).toBe(2);
    });

});
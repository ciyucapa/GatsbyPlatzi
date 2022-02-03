import React from 'react';
import renderer from 'react-test-renderer';
import Products from '../../../src/components/Products';

describe("Products", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Products 
                priceFormat={() => 3500} 
                edges={[{
                    node: {
                        image: 'https://platzi.com/images',
                        id: 'asas',
                        price: 3500,
                        product: {
                            name: 'test'
                        } 
                    }
                }]} 
                />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
import React from "react"
import renderer from "react-test-renderer"
import ProductDetail from '../../../src/components/productDetail'

describe("Starts", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<ProductDetail 
                    Object={{
                        id: 'sku', 
                        image:'https://test.com/image',
                        price: 1000,
                        product: {
                            name: 'test',
                            metadata: {
                                color: 'azul',
                                description: 'test',
                                img: 'https://test.com/image',
                                wear: true
                            }
                        }
                    }}
                />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
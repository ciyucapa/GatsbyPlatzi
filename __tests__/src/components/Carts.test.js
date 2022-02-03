import React from "react"
import renderer from "react-test-renderer"
import Carts from '../../../src/components/Carts'

describe("Carts", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Carts 
                   priceFormat={() => 3500}
                   handleBuy={() => 1}
                   cart={[{id: 3500, image: 'http://test.com/image', price: 3500, qty:1}]}
                   total={3500} 
                />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
import React from "react"
import renderer from "react-test-renderer"
import Starts from '../../../src/components/Starts'

describe("Starts", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Starts 
                    stars={5} 
                    onStars={() => 5} 
                />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
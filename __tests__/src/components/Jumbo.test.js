import React from "react"
import renderer from "react-test-renderer"
import Jumbo from '../../../src/components/Jumbo'

describe("ImageComponente", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Jumbo 
                  description="El mejor sitio" 
                >
                  <div>Test</div>
                </Jumbo>
                  )
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
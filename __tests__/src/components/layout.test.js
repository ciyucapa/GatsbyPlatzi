import React from "react"
import renderer from "react-test-renderer"
import Layout from '../../../src/components/layout'

describe("Layout", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Layout><div>TEST</div></Layout>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
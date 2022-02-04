import React from "react"
import renderer from "react-test-renderer"
import Seo from '../../../src/components/seo'

describe("Seo", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Seo 
                    lang= 'es'
                    meta={{
                        site: {
                            siteMetadata: {
                              title: 'test',
                              description: 'test description',
                              author: 'test'
                            }
                        }
                    }}
                    description='test'
                />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});
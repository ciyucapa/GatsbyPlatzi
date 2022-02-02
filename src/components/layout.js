import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import {Content, Footer} from '../styles/components'

const Layout = (props) => (
  <>
    <Header />
      <Content>
        <main>{props.children}</main>
        <Footer>
          con amor por
          <a href="https://www.platzi.com">Platzi</a>
        </Footer>
      </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Header from "./header"
import Navigation from "./navigation/NavigationMain";

const Layout = (props) => (
    <>
        <Header bigHeader={props.bigHeader} />
        <Navigation navActive={true} />

        <main className={props.product ? 'page-product' : 'page-static'}>{props.children}</main>

        <Footer>
            © {new Date().getFullYear()}
            {` `}
            Anežka Berecková.
        </Footer>

    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

Layout.defaultProps = {
    bigHeader: false,
    product: false
};

const Footer = styled.div`
  width: 100%;
  padding: 35px 0;
  text-align: center;
`;

export default Layout

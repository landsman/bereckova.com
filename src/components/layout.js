import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/NavigationMain";
import Footer from "./footer";
import styled from "styled-components";

const Layout = (props) => (
    <>
        <Wrapper>
            <Header bigHeader={props.bigHeader} />
            <Navigation navActive={true} />
            <main>
                {props.children}
            </main>
        </Wrapper>
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

Layout.defaultProps = {
    bigHeader: false,
    product: false
};

const Wrapper = styled.div`
    position: relative;
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
`;

export default Layout

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation/NavigationMain";
import Footer from "./footer";

const Layout = (props) => (
    <>
        <Header bigHeader={props.bigHeader} />
        <Navigation navActive={true} />
        <main>
            {props.children}
        </main>
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

export default Layout

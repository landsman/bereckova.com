import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FullWidth = (props) => (
  <Wrapper>
      {props.children}
  </Wrapper>
);

FullWidth.propTypes = {
    children: PropTypes.node.isRequired
};

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export default FullWidth;
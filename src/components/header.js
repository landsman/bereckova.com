import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Header() {
  return (
      <Wrapper>
          <LogoLink href={'/'}>
            <LogoImage
                src='/layout/logo.png'
                alt='Anežka Berecková'
            />
          </LogoLink>
      </Wrapper>
  )
}

Header.propTypes = {
    bigHeader: PropTypes.boolean,
    product: PropTypes.boolean
};

Header.defaultProps = {
    bigHeader: false,
    product: false
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 25px;
  text-align: center;
`;

const LogoLink = styled.a`
  display: block;
  
  &:hover {
    opacity: 0.9;
  }
  
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;
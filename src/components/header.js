import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";

import getConfig from "next/config";
const { publicRuntimeConfig: { CONTACT } } = getConfig();

export default function Header() {
  return (
      <Wrapper>
          <LogoLink href={'/'}>
            <LogoImage
                src='/layout/logo.png'
                alt='Anežka Berecková'
            />
          </LogoLink>
          <ContactWrapper>
              <ul>
                  <li>
                      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </li>
                  <li>
                      <a href={CONTACT.ig} target={'_blank'}>instagram</a>
                  </li>
                  <li>
                      <a href={CONTACT.fb} target={'_blank'}>facebook</a>
                  </li>
              </ul>
          </ContactWrapper>
      </Wrapper>
  )
}

Header.propTypes = {
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    bigHeader: false,
    product: false
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0;
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

const ContactWrapper = styled.div`
  padding: 35px 0;
`;
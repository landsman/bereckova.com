import React from 'react';
import styled from "styled-components";

import getConfig from "next/config";
const { publicRuntimeConfig: { CONTACT } } = getConfig();

export default function NavigationMain() {
    return (
        <Wrapper>
            <List>
                <Item>
                    <Link href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Link>
                </Item>
                <Item>
                    <Link href={CONTACT.ig} target={'_blank'}>instagram</Link>
                </Item>
                <Item>
                    <Link href={CONTACT.fb} target={'_blank'}>facebook</Link>
                </Item>
            </List>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  padding: 35px 0;
  text-align: center;
`;

const List = styled.ul`
  list-style-image: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  margin-left: 15px;
  
  &:before {
    content: "|";
    padding-right: 15px;
  }
  
  &:first-child {
    margin-left: 0;
    
    &:before {
      display: none;
    }
  }
 
`;

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
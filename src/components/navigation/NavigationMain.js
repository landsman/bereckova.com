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

  @media(max-width: 600px) {
    display: block;
    margin-top: 0;
    
      &:before {
        content: "";
        width: 100px;
        height: 1px;
        display: block;
        margin: 0 auto;
        background: #EEE;
      }
    
      &:first-child {
        margin-left: 0;
        
        &:before {
          display: none;
        }
      }
    
  }

  @media(min-width: 600px) {
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
  }
`;

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
  
    @media(max-width: 600px) {
      display: block;
      padding: 15px 0;
    }
`;
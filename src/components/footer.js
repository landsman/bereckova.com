import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <Wrapper>
            <Content>
                © {new Date().getFullYear()}
                {` `}
                Anežka Berecková.
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 0;
  margin-top: 150px;
  text-align: center;
  border-top: 1px solid #EEE;
`;

const Content = styled.div`
    position: relative;
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
`;

import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <Wrapper>
            © {new Date().getFullYear()}
            {` `}
            Anežka Berecková.
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 35px 0;
  margin-top: 150px;
  text-align: center;
`;
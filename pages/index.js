import React from "react";
import styled from "styled-components";
import SEO from "~/components/seo";
import Layout from "~/components/layout";
import Vimeo from "~/components/vimeo";

export default function Home() {
  return (
    <Layout>
      <SEO
        title={'Anežka Berecková - Fashion designer from Zlín ADO'}
        titleSuffix={false}
      />
      <Promo>
          <Vimeo
              videoId={246028035}
              width="640"
              height="273"
              autoplay={1}
              loop={1}
          />
      </Promo>
    </Layout>
  )
}

const Promo = styled.div`
  width: 100%;
  padding: 35px 0;
  text-align: center;
`;
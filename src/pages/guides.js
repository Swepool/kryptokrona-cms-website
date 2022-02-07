import * as React from 'react'
import Layout from "../components/Layout";
import BlogRoll from "../page-components/blog/BlogRoll";
import styled from "@emotion/styled";
import GuidesRoll from "../page-components/GuidesRoll";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
  transition: all 250ms;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
  
`

const Blog = () => {
    return(
        <Layout pageTitle="Guides">
            <Section>
                <Wrapper>
                    <GuidesRoll/>
                </Wrapper>
            </Section>
        </Layout>
    )
}

export default Blog
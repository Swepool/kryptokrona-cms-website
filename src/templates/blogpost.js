import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import styled from "@emotion/styled";

import '../theme/blogpost.css'

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

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle={frontmatter.title}>
            <Section>
                <Wrapper>
                    <div className="blog-post-container">
                        <div className="blog-post">
                            <PageHeader title={frontmatter.title} text1={frontmatter.date}/>
                            <div
                                style={{height: '100%'}}
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                </Wrapper>
            </Section>

        </Layout>
    )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
import React from "react"
import {graphql} from "gatsby"
import BlogHeader from "../page-components/blog/BlogHeader";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import Seo from "../components/Seo";

import '../theme/post-theme.css'

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
    const {markdownRemark} = data // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark
    return (
        <Layout>
            <Seo title={frontmatter.title} article={true}/>
            <Section>
                <Wrapper>
                    <div className="blog-post-container">
                        <div className="blog-post">
                            <BlogHeader title={frontmatter.title} text1={frontmatter.date} text2={frontmatter.tags}/>
                            <div
                                style={{height: '100%'}}
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{__html: html}}
                            />
                        </div>
                    </div>
                </Wrapper>
            </Section>

        </Layout>
    )
}
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                tags
            }
        }
    }
`
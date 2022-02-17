import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "@emotion/styled";
import {color} from "../../theme/colors";

const Section = styled.div`
  border-top: 1px solid ${color.divide};
  background-color: ${color.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BlogWrapper = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  padding: 140px 40px;

  @media screen and (max-width: 579px) {
    padding: 140px 20px;
  }
`;

const Card = styled.div`
  flex: 1 0 28%;
  padding: 20px 0;
  filter: saturate(0%);
  -webkit-filter: saturate(0%);
  transition: 250ms;
  
  &:hover {
  filter: saturate(100%);
  -webkit-filter: saturate(100%);
}
  
  @media screen and (max-width: 1440px) {
    flex: 1 0 40%;
  }

  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
  overflow: hidden;
  transition: 250ms;
`

const Title = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  color: ${color.white}
`;

const Text = styled.p`
  text-align: justify;
  color: ${color.white60};

`;
const Read = styled.p`
  font-size: 1rem;
  color: ${color.green};
`;


class LatestBlog extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Section>
                <BlogWrapper>
                    {posts &&
                        posts.map(({ node: post }) => (
                            <Card key={post.id}>
                                <Link to={`blog/${post.frontmatter.slug}/`}>
                                    <>
                                        <BlogImage src={post.frontmatter.thumbnail}/>
                                        <Title>{post.frontmatter.title}</Title>
                                        <Text>{post.frontmatter.summary}</Text>
                                    </>
                                    <Read>Read more →</Read>
                                </Link>
                            </Card>
                        ))}
                </BlogWrapper>
            </Section>
        )
    }
}

LatestBlog.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

const query = () => (
    <StaticQuery
        query={graphql`
query LatestBlogQuery {
  allMarkdownRemark(
    limit: 3
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {frontmatter: {layout: {eq: "blog"}, title: {ne: " "}}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          thumbnail
          tags
          summary
        }
      }
    }
  }
}

    `}
        render={(data, count) => <LatestBlog data={data} count={count} />}
    />
)

export default query
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "@emotion/styled";
import {color} from "../../theme/colors";

const Section = styled.div`
  border-top: 1px solid ${color.divide};
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }
`

const BlogWrapper = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  padding: 0 40px;
  
  
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
  font-size: 30px;
  color: #ffffff;
  margin-top: 0;
`;

const Text = styled.p`
  text-align: justify;
  color: rgba(255, 255, 255, 0.6);

`;
const Tags = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

const Date = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Section>
                <h2>Latest post</h2>
                <BlogWrapper>
                    {posts &&
                        posts.map(({ node: post }) => (
                            <Card key={post.id}>
                                <Link to={`blog/${post.frontmatter.slug}`}>
                                    <>
                                        <BlogImage src={post.frontmatter.thumbnail}/>
                                        <Tags>{post.frontmatter.tags}</Tags>
                                        <Title>{post.frontmatter.title}</Title>
                                        <Text>{post.frontmatter.summary}</Text>
                                    </>
                                    <Date>{post.frontmatter.date}</Date>
                                </Link>
                            </Card>
                        ))}
                </BlogWrapper>
            </Section>
        )
    }
}

BlogRoll.propTypes = {
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
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)

export default query
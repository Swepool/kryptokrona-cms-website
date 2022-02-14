import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "@emotion/styled";

const BlogWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #2a2a2a;
  transition: 250ms;
  align-items: center;
  
  &:hover {
    opacity: 60%;
  }
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;
`;

const Date = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

class GuidesRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <BlogWrapper>
                {posts &&
                    posts.map(({ node: post }) => (
                        <Link style={{width: "100%"}} to={post.frontmatter.slug}>
                        <Card key={post.id}>

                                <Title>{post.frontmatter.title}</Title>
                                <Date>{post.frontmatter.date}</Date>

                        </Card>
                    </Link>
                    ))}
            </BlogWrapper>
        )
    }
}

GuidesRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

const query = () => (
    <StaticQuery
        query={graphql`
query GuidesRollQuery {
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {frontmatter: {title: {ne: ""}, summary: {ne: ""}}, fileAbsolutePath: {glob: "**/guides/*.md"}}
  ) {
    edges {
      node {
        id
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
}

    `}
        render={(data, count) => <GuidesRoll data={data} count={count} />}
    />
)

export default query
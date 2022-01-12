import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "@emotion/styled";

const Card = styled.div`
  flex: 1 0 28%;
  border-bottom: 1px solid #2a2a2a;

  &:hover {
    transition: 300ms;
    opacity: 60%;
    backdrop-filter: blur(8);

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
  height: 300px;
  object-fit: cover;
  overflow: hidden;
`

const Title = styled.h2`
  font-size: 30px;
  color: #ffffff;
  margin-top: 0;
`;

const Text = styled.p`
  text-align: justify;
  color: #ffffff;

`;
const Tags = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

const Date = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

const BlogWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
`;

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <BlogWrapper>
                {posts &&
                    posts.map(({ node: post }) => (
                        <Card key={post.id}>
                            <Link to={post.frontmatter.path}>
                                <BlogImage src={post.frontmatter.thumbnail}/>
                                <Tags>{post.frontmatter.tags}</Tags>
                                <Title>{post.frontmatter.title}</Title>
                                <Text>{post.frontmatter.summary}</Text>
                                <Date>{post.frontmatter.date}</Date>
                            </Link>
                        </Card>
                    ))}
            </BlogWrapper>
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
query BlogRollQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        frontmatter {
          path
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
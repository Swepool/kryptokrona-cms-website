const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const blogPostTemplate = path.resolve(`src/templates/blogpost.js`);
    const guidePostTemplate = path.resolve(`src/templates/guidepost.js`);

    const result = await graphql(`
{
  blogs: allMarkdownRemark(
    filter: {fileAbsolutePath: {glob: "**/blog/*.md"}}
    sort: {order: DESC, fields: frontmatter___date}
  ) {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
  guides: allMarkdownRemark(
    filter: {fileAbsolutePath: {glob: "**/guides/*.md"}}
    sort: {order: DESC, fields: frontmatter___date}
  ) {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
}
  `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return
    }

    result.data.blogs.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {}, // additional data can be passed via context
        })
    })
    result.data.guides.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: guidePostTemplate,
            context: {}, // additional data can be passed via context
        })
    })
};
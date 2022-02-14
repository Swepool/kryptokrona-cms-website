const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const blogPostTemplate = path.resolve(`src/templates/post-template.js`);
    const guidePostTemplate = path.resolve(`src/templates/post-template.js`);

    const result = await graphql(`
{
  blogs: allMarkdownRemark(
    filter: {fileAbsolutePath: {glob: "**/blog/*.md"}}
    sort: {order: DESC, fields: frontmatter___date}
  ) {
    edges {
      node {
        frontmatter {
           slug
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
          slug
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
            path: `blog/${node.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {
                slug: node.frontmatter.slug
            }, // additional data can be passed via context
        })
    })
    result.data.guides.edges.forEach(({node}) => {
        createPage({
            path: `guides/${node.frontmatter.slug}`,
            component: guidePostTemplate,
            context: {
                slug: node.frontmatter.slug
            }, // additional data can be passed via context
        })
    })
};
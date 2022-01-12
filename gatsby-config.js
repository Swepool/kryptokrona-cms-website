module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-netlify-cms',
        `gatsby-transformer-remark`,
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ]
}
module.exports = {
    siteMetadata: {
        siteUrl: `https://kryptokrona.org`,
        title: "Kryptokrona",
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-netlify-cms',
        `gatsby-transformer-remark`,
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.kryptokrona.org`,
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/favicon.ico",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/guides`,
                name: `guides`,
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
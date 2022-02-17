module.exports = {
    siteMetadata: {
        title: "Kryptokrona",
        titleTemplate: "%s | ",
        description:
            "A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open-source code that allows you to be involved and improve the money of the future.",
        url: "https://www.kryptokrona.org",
        image: "/static/content/ogimage.png",
        twitterUsername: "@kryptokrona",
        siteUrl: `https://www.kryptokrona.org`,
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-netlify-cms',
        `gatsby-transformer-remark`,
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-exclude',
            options: { paths: ['/about/blog/',  '/mining/blog/','/wallet/blog/', '/roadmap/blog/', '/404/blog/', '/blog/**/blog/' ] },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.kryptokrona.org',
                sitemap: 'https://www.kryptokrona.org/sitemap.xml',
                env: {
                    development: {
                        policy: [{userAgent: '*', disallow: ['/']}]
                    },
                    production: {
                        policy: [{userAgent: '*', allow: '/'}]
                    }
                }
            }
        },
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
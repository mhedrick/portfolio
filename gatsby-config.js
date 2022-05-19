module.exports = {
    siteMetadata: {
        title: `Maggie Hedrick`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
              offset: -50
            }
          }
    ],
}
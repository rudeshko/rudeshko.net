module.exports = {
  siteMetadata: {
    title: `Dima Rudeshko`,
    description: `rudeshko.net`,
    author: `@rudeshko`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dima Rudeshko`,
        short_name: `rudeshko.net`,
        start_url: `/`,
        background_color: `#ffc600`,
        theme_color: `#ffc600`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41944300-1",
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "rudeshko.net",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

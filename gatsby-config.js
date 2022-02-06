module.exports = {
  siteMetadata: {
    author: `liitu consulting gmbh`,
    title: `myclub | the next generation`,
    description: `myclub | the next generation`,
    siteUrl: `https://my-club.app/`,
    locale: `de_CH`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `myclub | the next generation`,
        short_name: `myclub`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#339BDE`,
        display: `standalone`,
        icon: `src/images/icon/logo_trans.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

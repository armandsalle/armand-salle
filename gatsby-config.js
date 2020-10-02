module.exports = {
  siteMetadata: {
    title: `Armand Sallé - Creative developer`,
    description: `HI! I'M A FRENCH CREATIVE FRONTEND DEVELOPER FREELANCE, BASED IN NANTES, WITH A GREAT INTEREST IN FOOD AND WEB DESIGN. AVAILABLE FOR WORK.`,
    author: `@armandsalle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/index.js`),
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            debug: false,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
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
        name: `Armand Sallé - Creative developer`,
        short_name: `Armand Sallé`,
        start_url: `/`,
        lang: `en`,
        theme_color_in_head: false,
        icon: `src/images/favicon.svg`,
      },
    },
  ],
}

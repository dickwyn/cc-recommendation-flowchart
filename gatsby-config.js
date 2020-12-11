module.exports = {
  siteMetadata: {
    title: 'Credit Card Recommendation Flowchart',
    description:
      "This flowchart offers a general, subjective guide to which credit cards to get in what order to maximize your overall churning profits, whether you're under 5/24 and chasing the SW companion pass, or over 5/24 and chasing cashback, or even a student brand-new to the churning game - and a few things in between, though it is geared towards helping new and new-ish churners plan out applications, not those of you who are LOL/24 (but maybe you'll find something useful in it too?).",
    author: '@dickwyn',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'credit-card-recommendation-flowchart',
        short_name: 'card-flowchart',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,

      options: {
        fonts: [`IBM Plex Sans\:400,400i,700,700i`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};

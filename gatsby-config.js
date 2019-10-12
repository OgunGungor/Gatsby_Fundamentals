/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = { 
  siteMetadata: {
    title: 'siteMetaData in gatsby-config.js!!',
    author: 'Ogun Gungor'
  },
  plugins: [
    //gatsby-source-graphql yukleyip graphql API mize sorgu atabiliriz
    //https://www.youtube.com/watch?v=wNUg1jpj9T0  17.40
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve : 'gatsby-source-contentful',
      options : {
        spaceId : process.env.CONTENTFUL_SPACE_ID,
        accessToken : process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}

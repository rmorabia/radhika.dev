module.exports = {
  siteMetadata: {
    title: 'Radhika Morabia',
    titleTemplate: '%s · Radhika Morabia',
    description: 'Full-Stack Software Engineer interested in React, Node, JavaScript, and Python',
    url: 'https://radhika.dev',
    siteUrl: 'https://radhika.dev'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Radhika Morabia',
        short_name: 'radhika.dev',
        start_url: 'https://radhika.dev',
        background_color: '#00ff7f',
        theme_color: '#00ff7f',
        display: 'standalone',
        icon: 'assets/images/favicon.ico',
      },
    }
  ],
}

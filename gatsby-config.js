module.exports = {
  siteMetadata: {
    title: 'Adasah Sagol\'s personal site',
    description: 'Web development, blogging, and random thoughts from a Brooklyn dev.',
    author: '@dassidas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Dancing Script',
            },
            {
              family: 'Arvo',
            },
            {
              family: 'Open Sans',
            },
          ],
        }
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~components': 'src/components',
          '~utilities': 'src/utilities',
          '~state': 'src/state',
          '~images': 'src/images',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'adasah-personal',
        short_name: 'personal',
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: 'src/images/site-icon.png',
      },
    },
  ],
}

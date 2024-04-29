const path = require('path')

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CPU Showcase`,
    siteUrl: `https://tia-nn.github.io/cpu-showcase`
  },
  pathPrefix: `/cpu-showcase`,
  plugins: ["gatsby-plugin-postcss"],
};

/**
 * @param {import('gatsby').CreateWebpackConfigArgs} param0
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
};

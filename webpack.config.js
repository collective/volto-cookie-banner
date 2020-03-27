var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'volto-cookie-banner.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VoltoCookieBanner',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  externals: {
    'prop-types': 'prop-types',
    'react-intl': 'react-intl',
    'react-redux': 'react-redux',
    redux: 'redux',
    react: 'react',
    'react-dom': 'react-dom',
  },
}

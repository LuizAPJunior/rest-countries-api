const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = (env, argv) => {
  console.log('argv ', argv.mode);

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/',
    },
    devServer: {
      static: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
      historyApiFallback: true,
      hot: true,
      open: true,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './public/index.html'),
        filename: 'index.html',
        inject: 'body',
        favicon: path.join(__dirname, '/src/assets/icons/world.png'),
      }),
    ],
  };
};
module.exports = config;

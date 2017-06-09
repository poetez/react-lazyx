const webpack = require('webpack');
const config = require('./webpack.common');
const paths = require('./paths');

module.exports = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    filename: 'react-lazyx.min.js',
    path: paths.build,
  }),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.src,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: paths.tsconfig,
          mapRoot: '../umd',
          target: 'es3',
          forkChecker: true,
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false,
      },
      mangle: {
        screw_ie8: false,
      },
      output: {
        screw_ie8: false,
      },
    }),
  ],
});

const config = require('./webpack.common');
const paths = require('./paths');

module.exports = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    filename: 'react-lazyx.js',
    path: paths.build,
  }),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.src,
        loader: 'awesome-typescript-loader',
        options: {
          cacheDirectory: paths.cache,
          configFileName: paths.tsconfig,
          mapRoot: '../umd',
          target: 'es3',
          forkChecker: true,
          transpileOnly: true,
        },
      },
    ],
  },
});

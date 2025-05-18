// webpack.config.js
const path = require('path');
const webpack = require('webpack'); // Needed for plugins like ProvidePlugin

module.exports = {
  // Set mode to 'development' for easier debugging, 'production' for smaller size and optimizations
  mode: 'development',

  // The entry point for your Service Worker script
  entry: './background.js',

  // Output configuration
  output: {
    // The name of the bundled output file
    filename: 'background.bundle.js',
    // The directory where the bundled file will be placed
    path: path.resolve(__dirname, 'dist'),
    // Clean the output directory before emit
    clean: true,
  },

  // Configure how modules are resolved
  resolve: {
    // Add polyfills for Node.js core modules that AWS SDK might depend on
    // These require installing browser-compatible libraries via npm
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      // Add other polyfills here if you encounter errors related to Node.js built-ins
      // e.g., "util": require.resolve("util/")
    }
  },

  // Module rules (loaders) - useful if you need to process specific file types
  module: {
    rules: [
      // Add rules here if you need them, e.g., for Babel to transpile modern JS
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ],
  },

  // Plugins - used for tasks like providing polyfills globally or other build steps
  plugins: [
    // Provide the Buffer class globally if needed by any dependency (e.g., older code)
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    }),
    // Provide process.env if needed (some libraries check for process.env.NODE_ENV)
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],

  // Target environment: 'web' is often sufficient even for Service Workers
  // as it provides browser APIs. 'webworker' is also an option but might require
  // different polyfill strategies depending on the libraries used.
  target: 'web',

  // Devtool: Source maps for easier debugging in development mode
  devtool: 'inline-source-map', // Or 'cheap-module-source-map' etc.

  // Suppress performance hints for large bundles (AWS SDK can be large)
  performance: {
    hints: false
  },

  // Optional: Optimization settings for production builds
  // optimization: {
  //   minimize: true, // Enable code minification
  //   // Add splitChunks if you wanted to split output files, but for a single SW, maybe not needed
  // },
};
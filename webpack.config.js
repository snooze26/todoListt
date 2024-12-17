const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your main JavaScript file
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Path to the "dist" folder
  },
  mode: 'development', // Use "production" for optimized builds
};
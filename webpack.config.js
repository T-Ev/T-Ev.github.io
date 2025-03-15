const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build/static"), // Incorrect
    filename: "[name].[contenthash].js",
  },
};

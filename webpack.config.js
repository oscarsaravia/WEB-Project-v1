module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        use: ["babel-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
  },
};

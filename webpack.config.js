module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jsx)$/,
        use: ["eslint-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    contentBase: "./dist",
  },
};

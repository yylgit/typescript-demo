module.exports = {
  mode: "development",
  // devtool: "inine-cheap-module-source-map",
  entry: "./src/entry.ts",
  output: {
    filename: "build/bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      // { test: /\.tsx?$/, loader: "babel-loader" }
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
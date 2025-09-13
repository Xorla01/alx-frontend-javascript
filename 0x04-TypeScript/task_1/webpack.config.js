// webpack.config.mjs
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

/** @type {import("webpack").Configuration} */
const config = {
  entry: "./main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    static: "./dist",
    port: 9000,
    open: true,
    client: {
    logging: "none",   // disables "tips" text
    overlay: true      // still show errors in the browser if they happen
  }
  }
};

export default config;

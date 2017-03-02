module.exports = {
  context: __dirname,
  entry: "./app/dist/index.jsx",
  output: {
    path: __dirname + "/app/js",
    filename: "index.min.js"
  },  
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015'],
          // plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  }
};
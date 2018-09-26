const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
      port: 10000,
      contentBase: path.join(__dirname, "dist")
    },
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: [ '.js', '.jsx' ]
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ],
            plugins: []
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.png$/,
          loader: "file-loader"
        }
      ]
    },
    plugins: []
}